<?php

namespace App\Services\Interfaces;

use App\Dto\RatingDto;


interface RatingServiceInterface 
{

    public function  create(RatingDto $ratingDTO , $clientId);

}
