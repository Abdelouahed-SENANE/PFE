<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

class ProfileController extends Controller
{
    public function __construct()
    {
    }

    public function updateInfos(Request $request)
    {

        $rules = [
            'name' => 'required|string',
            'username' => 'required',
            'email' => 'required|string|email|max:50',
            'address' => 'required|string|max:255',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status'   => false,
                'message'   => 'Somthing Wrong!!',
                'data'      => $validator->errors()
            ]);
        }
        $user = JWTAuth::user();
        $user->update($request->all());
        $userDetails = $this->userDetails($user);
        if ($userDetails->freelancer) {
            $userDetails['role'] = 'freelancer';
            unset($userDetails->client, $userDetails->admin);
        } else if ($userDetails->client) {
            $userDetails['role'] = 'client';
            unset($userDetails->freelancer, $userDetails->admin);
        } else {
            $userDetails['role'] = 'admin';
            unset($userDetails->freelancer, $userDetails->client);
        }
        return response()->json([
            'status'   => true,
            'message' => 'You informations updated Succcefully',
            'user' => $userDetails
        ]);
    }
    // ===============================!!!!!!!!!!!!
    public function updatePicture(Request $request)
    {

        $rules = [
            'picture' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Faild to upload image',
                'errors' => $validator->errors()
            ]);
        }
        $user = JWTAuth::user();
        if ($request->hasFile('picture') && $request->file('picture')->isValid()) {
            $picture = $request->file('picture');
            $picName = time() . '.' . $picture->getClientOriginalExtension();
            $picture->storeAs('public/uploads', $picName);
            $user->picture = $picName;
            $user->save();
        }
        $userDetails = $this->userDetails($user);
        if ($userDetails->freelancer) {
            $userDetails['role'] = 'freelancer';
            unset($userDetails->client, $userDetails->admin);
        } else if ($userDetails->client) {
            $userDetails['role'] = 'client';
            unset($userDetails->freelancer, $userDetails->admin);
        } else {
            $userDetails['role'] = 'admin';
            unset($userDetails->freelancer, $userDetails->client);
        }
        return response()->json([
            'status' => true,
            'message' => 'Your Picture updated Succefully',
            'user' => $userDetails
        ], Response::HTTP_OK);
    }

    public function updatePassword(Request $request)
    {
        $rules = [
            'currentPwd' => 'required|string',
            'password' => 'required|string|min:8|different:currentPwd',
            'confirmPwd' => 'required|string|same:password',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }
        $user = JWTAuth::user();
        $userDetails = $this->userDetails($user);
        if ($userDetails->freelancer) {
            $userDetails['role'] = 'freelancer';
            unset($userDetails->client, $userDetails->admin);
        } else if ($userDetails->client) {
            $userDetails['role'] = 'client';
            unset($userDetails->freelancer, $userDetails->admin);
        } else {
            $userDetails['role'] = 'admin';
            unset($userDetails->freelancer, $userDetails->client);
        }
        if (Hash::check($request->currentPwd, $user->password)) {
            $user->password = bcrypt($request->password);
            $user->save();
            return response()->json(
                [
                    'status' => true,
                    'user' => $userDetails,
                    'message' => 'Your password updated Succefully',
                ],
                Response::HTTP_OK
            );
        }
        return response()->json(
            [
                'status' => false,
                'message' => 'Something went wrong. Please try again.',
            ],
            Response::HTTP_OK
        );
    }

    public function getUser()
    {
        $user = JWTAuth::user() ?? 'User not found';
        return response()->json($this->userDetails($user), 200);
    }

    public function userDetails($user)
    {
        return User::with('freelancer', 'client')->find($user->id);
    }
}
