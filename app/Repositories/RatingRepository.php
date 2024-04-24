<?php

namespace App\Repositories;

use App\Dto\RatingDto;

use App\Models\Order;
use App\Models\Rating;
use App\Repositories\Interfaces\RatingRepositoryInterface;

use Illuminate\Support\Facades\Log;

class RatingRepository implements RatingRepositoryInterface
{

    /**
     * @var Rating
     */

    /**
     * @param Rating $admin
     */

    public function __construct(protected Rating $rating)
    {
    }

    public function getAllRatingGisByOrder($gigId)
    {
    }

    public function createRating(RatingDto $ratingDTO, $clientId)
    {
        try {
            $attributes = array_merge($ratingDTO->toArray() , ['client_id' => $clientId]);
            
            $rating =  $this->rating->create([
                'order_id' => $attributes['order_id'],
                'value' => $attributes['value'],
                'comment' => $attributes['comment'],
                'client_id' => $attributes['client_id'],
            ]);



            return $rating;
        } catch (\Exception $e) {
            throw new \Exception("Failed to create rating: " . $e->getMessage());
        }
    }
}
