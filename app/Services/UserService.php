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
      return $this->userRepository->all();
   }
   public function destroy(string $id)
   {
      return $this->userRepository->destroy($id);
   }
   public function countUsers() {
      return $this->userRepository->countUsers();
   }
}
