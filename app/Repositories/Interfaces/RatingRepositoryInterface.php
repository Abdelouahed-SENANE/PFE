<?php

namespace App\Repositories\Interfaces;

use App\Dto\RatingDto;


interface RatingRepositoryInterface
{
    public function getAllRatingGisByOrder($gigId);
    public function createRating(RatingDto $ratingDTO ,  $clientid);
    public function getAverageRatingByFreelancerId($freelancerId);
}
