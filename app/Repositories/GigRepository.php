<?php

namespace App\Repositories;

use App\Models\Freelancer;
use App\Models\Gig;
use App\Repositories\Interfaces\GigRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class GigRepository implements GigRepositoryInterface
{

   /**
    * @var Gig
    */
   protected $gig;

   /**
    * @param gig $gig
    */

   public function __construct(Gig $gig)
   {
      $this->gig = $gig;
   }
   // ========== Implentation Interfaces =========
   public function all(): JsonResponse
   {  
      $gigs = $this->gig->all();
      return response()->json([$gigs]);
   }

   public function createGig(array $attributes, Freelancer $freelancer)
   {
      return $freelancer->gigs()->create($attributes);
   }

   public function updateGig(Gig $gig, array $attributes) : Gig
   {
      $gig->update($attributes);
      return $gig;
   }

   public function deleteGig(Gig $gig)
   {
      
      return $gig->delete($gig);
   }
}

