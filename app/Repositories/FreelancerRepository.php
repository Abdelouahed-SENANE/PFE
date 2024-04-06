<?php

namespace App\Repositories;

use App\Models\Freelancer;


class FreelancerRepository {

    /**
     * @var Freelancer
     */
    protected $freelancer; 

    /**
     * @param Freelancer $post
     */

     public function __construct(Freelancer $freelancer)
     {
        $this->freelancer = $freelancer;
     }
}