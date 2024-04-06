<?php


namespace App\Services;

use App\Repositories\AdminRepository;


class AdminService {


    /**
     * @var $adminRepository
     */
    protected $adminRepository;

    /**
     * @param AdminRepository $adminRepository
     */

     public function __construct(AdminRepository $adminRepository)
     {
        $this->adminRepository = $adminRepository;

     }
}