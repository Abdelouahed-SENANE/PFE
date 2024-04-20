<?php

namespace App\Http\Controllers;

use App\Services\Interfaces\UserServiceInterface;
use App\Services\UserService;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use Exception;

class UserController extends Controller
{
    use ApiResponse;
    public function __construct(protected UserService $userService)
    {
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try {
            $users = $this->userService->all();
            return $this->success($users, 'Request Succefull');
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $deleteUser = $this->userService->destroy($id);
            return $this->success($deleteUser , 'User Deleted Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
