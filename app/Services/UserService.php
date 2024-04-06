<?php


namespace App\Services;

use App\Repositories\UserRepository;


class UserService {


    /**
     * @var $userRepository
     */
    protected $userRepository;

    /**
     * @param UserRepository $userRepository
     */

     public function __construct(UserRepository $userRepository)
     {
        $this->userRepository = $userRepository;

     }
}