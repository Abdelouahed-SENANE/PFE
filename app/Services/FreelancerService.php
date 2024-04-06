<?php


namespace App\Services;


use App\Repositories\FreelancerRepository;


class FreelancerService {


    /**
     * @var $userRepository
     */
    protected $freelancerRepository;

    /**
     * @param freelancerRepository $freelancerRepository
     */

     public function __construct(FreelancerRepository $freelancerRepository)
     {
        $this->freelancerRepository = $freelancerRepository;

     }
}