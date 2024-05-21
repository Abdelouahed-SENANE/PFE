<?php

namespace App\Repositories\Interfaces;

use App\Models\User;

interface MessageRepositoryInterface {

    public function all();
    public function store(User $user , int $conversation , string $message);
    public function getUsers(int $conversation);
}