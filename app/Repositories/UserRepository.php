<?php

namespace App\Repositories;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{

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

    public function all()
    {
        $user = $this->user->with('client', 'freelancer', 'admin')->get();

        return $user;
    }

    public function destroy(string $id)
    {
        $deleteUser = $this->user->findOrFail($id);
        $deleteUser->deleted_at = now();
        $deleteUser->save();
        return $deleteUser;
    }

    public function countUsers()
    {
        return $this->user->all()->count();
    }
}
