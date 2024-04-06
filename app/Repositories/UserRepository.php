<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface {

    /**
     * @var User
     */
    protected $user; 

    /**
     * @param User $user
     */

     public function __construct(User $user)
     {
        $this->user = $user;
     }

     public function all() {
      return $this->user->all();
     }
}