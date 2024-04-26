<?php

namespace App\Repositories;

use App\Dto\RatingDto;
use App\Models\Freelancer;
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
            $attributes = array_merge($ratingDTO->toArray(), ['client_id' => $clientId]);
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

    public function getAverageRatingByFreelancerId($freelancerId)
    {
        // Retrieve the freelancer by ID with their gigs, orders, and associated ratings
        $freelancer = Freelancer::with('gigs.orders.rating')->find($freelancerId);

        if (!$freelancer) {
            return null; // Handle case where freelancer is not found
        }


        $totalRating = [];
        // Iterate through each gig of the freelancer
        foreach ($freelancer->gigs as $gig) {
            foreach ($gig->orders as $order) {
                if ($order->rating) {
                    $totalRating[] = $order->rating->value;
                }
            }
        }
        $sumRatings = 0;
        for ($i = 0; $i < count($totalRating); $i++) {
            $sumRatings += $totalRating[$i];
        }

        $averageRating = (count($totalRating) > 0) ? ($sumRatings / count($totalRating)) : 0;
        return ['averageRating' => $averageRating , 'totalRating' => count($totalRating)];
    }
}
