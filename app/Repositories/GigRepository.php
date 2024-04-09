<?php

namespace App\Repositories;

use App\Dto\GigDto;
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

   public function createGig(GigDto $gigDto, Freelancer $freelancer)
   {
      $attributes = $gigDto->toArray();
      return $freelancer->gigs()->create($attributes);
   }

   public function updateGig(Gig $gig, GigDto $gigDto) : Gig
   {
      $attributes = $gigDto->toArray();
      $gig->update($attributes);
      return $gig;
   }

   public function deleteGig(Gig $gig)
   {
      
      return $gig->delete($gig);
   }
   public function updateStatus($gigId, $status)
   {
      $gig = $this->gig::findOrFail($gigId);
      $gig->status = $status;
      $gig->save();
      return $gig;
   }
}

