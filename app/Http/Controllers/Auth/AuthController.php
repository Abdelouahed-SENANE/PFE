<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Organizer;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function __construct()
    {
    }


    public function login(LoginRequest $request)
    {

        $credentials = $request->only('email', 'password');
        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized'
            ], 401);
        }

        $user = Auth::user();
        $userDetails = $this->userDetails($user);
        if ($userDetails->freelancer !== 'freelancer') {
            unset($userDetails->client);
        } else {
            unset($userDetails->freelancer);
        }
        return response()->json([
            'status' => true,
            'user' => $userDetails,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ], 200);
    }

    public function register(RegisterRequest $request)
    {

        $payload = $request->validated();
        $user = User::create($payload);
        if ($payload['role'] === 'freelancer') {
            $user->freelancer()->create([
                'skills' => $payload['skills'],
                'bio' => $payload['bio']
            ]);
        } else {
            $user->client()->create([
                'payment_information' => $payload['payment_information']
            ]);
        }

        $token = Auth::login($user);

        return response()->json([
            'status' => true,
            'message' => 'User created successfully',
            'user' => $this->userDetails($user),
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ], 201);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => true,
            'message' => 'Successfully logged out'
        ]);
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
