<?php

namespace App\Repositories;

use App\Dto\RatingDto;
use App\Models\Freelancer;
use App\Models\Order;
use App\Models\Rating;
use App\Repositories\Interfaces\RatingRepositoryInterface;
use Illuminate\Support\Facades\DB;
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
        // $freelancer = Freelancer::with('gigs.orders.rating')->find($freelancerId);

        if (!$freelancerId) {
            return null; // Handle case where freelancer is not found
        }
        $overallRatingOfFreelancer = DB::table('freelancers')
                ->select('freelancers.id AS freelancerID' , DB::raw('AVG(ratings.value) AS OverallRatings'))
                ->join('gigs' , 'gigs.freelancer_id' , '=' ,'freelancers.id')
                ->join('orders' , 'orders.gig_id' , '=' ,'gigs.id')
                ->join('ratings' , 'ratings.order_id' , '=' ,'orders.id')
                ->where('freelancers.id' , $freelancerId)
                ->groupBy('freelancers.id')
                ->first();


        $countReviewsByFreelancer = DB::table('freelancers')
                ->select('freelancers.id' , DB::raw('COUNT(ratings.id) AS total_reviews'))
                ->join('gigs' , 'gigs.freelancer_id' , '=' ,'freelancers.id')
                ->join('orders' , 'orders.gig_id' , '=' ,'gigs.id')
                ->join('ratings' , 'ratings.order_id' , '=' ,'orders.id')
                ->where('freelancers.id' , $freelancerId)
                ->groupBy('freelancers.id')
                ->first();

        return ['averageRating' => $overallRatingOfFreelancer , 'totalRating' => $countReviewsByFreelancer];
    }
}
