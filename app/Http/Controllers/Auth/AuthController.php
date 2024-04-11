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
use Symfony\Component\HttpFoundation\Response;

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
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Something went wrong. Please try again.',
                ],
                401
            );
        }

        $user = Auth::user();
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
            $user->client()->create();
        }

        $token = Auth::login($user);
        $user = Auth::user();
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
            'message' => 'User created successfully',
            'user' => $userDetails,
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
