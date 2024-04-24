<?php

namespace App\Repositories\Interfaces;

use App\Dto\OrderDto;
use App\Dto\RatingDto;
use App\Models\Client;
use App\Models\Order;
use App\Models\Rating;

interface RatingRepositoryInterface
{
    public function getAllRatingGisByOrder($gigId);
    public function createRating(RatingDto $ratingDTO ,  $clientid);
}
