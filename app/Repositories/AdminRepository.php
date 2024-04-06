<?php

namespace App\Repositories;

use App\Models\Admin;


class AdminRepository {

    /**
     * @var Admin
     */
    protected $admin; 

    /**
     * @param Admin $admin
     */

     public function __construct(Admin $admin)
     {
        $this->admin = $admin;
     }
}