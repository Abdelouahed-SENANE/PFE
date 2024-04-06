<?php

namespace App\Repositories;

use App\Models\User;


class UserRepository {

    /**
     * @var User
     */
    protected $user; 

    /**
     * @param User $post
     */

     public function __construct(User $user)
     {
        $this->user = $user;
     }
}