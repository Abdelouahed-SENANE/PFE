<?php


namespace App\Services;

use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\UserRepository;
use App\Services\Interfaces\UserServiceInterface;
use Symfony\Component\HttpFoundation\Response;

class UserService implements UserServiceInterface
{

   public function __construct(protected UserRepositoryInterface $userRepository)
   {
   }

   public function all()
   {
      $users = $this->userRepository->all();
      return response()->json(['users'=>$users] , Response::HTTP_OK);
   }
}
