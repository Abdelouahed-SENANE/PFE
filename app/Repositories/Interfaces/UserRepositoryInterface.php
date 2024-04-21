<?php

namespace App\Repositories\Interfaces;

interface UserRepositoryInterface
{

    public function all();
    public function destroy(string $id);
    public function countUsers();
}
