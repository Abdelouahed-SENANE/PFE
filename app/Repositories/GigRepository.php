<?php

namespace App\Repositories;

use App\Dto\GigDto;
use App\Models\Freelancer;
use App\Models\Gig;
use App\Models\User;
use App\Repositories\Interfaces\GigRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
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
   public function myGigs(): JsonResponse
   {
      $user = JWTAuth::user();
      $freelancer = $user->freelancer()->first();
      $myGigs = Gig::where('freelancer_id', $freelancer->id)->get();
      $activeGig = [];
      $pendingGig = [];
      $deniedGig = [];

      foreach ($myGigs as $myGig) {
         
         $formattedGig = [
            'id' => $myGig->id,
            'title' => $myGig->title,
            'excerpt' => $myGig->excerpt,
            'delivery_date' => $myGig->delivery,
            'status' => $myGig->status,
         ];
         if ($myGig->status === 'approved') {
            $activeGig[] = $formattedGig;
         } else if ($myGig->status === 'pending') {
            $formattedGig['actions'] = 'actions';
            $pendingGig[] = $formattedGig;
         } else {
            $deniedGig[] = $formattedGig;
         }
      }
      $tabs = [
         [
            'id' => 1,
            'label' => 'Active',
            'tableHead' => ['ID', 'title', 'Excerpt','Delivery date' , 'Status'],
            'rows' => $activeGig,
         ],
         [
            'id' => 2,
            'label' => 'Pending approval',
            'tableHead' => ['ID','title', 'Excerpt', 'Delivery date', 'Status', 'actions'],
            'rows' => $pendingGig,
         ],
         [
            'id' => 3,
            'label' => 'Denied',
            'tableHead' => ['ID', 'title', 'Excerpt','Delivery date' , 'Status'],
            'rows' => $deniedGig,
         ],
      ];


      return response()->json([
         'myGigs' => $tabs
      ]);
   }
   public function createGig(GigDto $gigDto, Freelancer $freelancer)
   {
      $attributes = $gigDto->toArray();
      return $freelancer->gigs()->create($attributes);
   }

   public function updateGig($gigId, GigDto $gigDto): Gig
   {
      $gig = Gig::findOrFail($gigId);
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
   public function show(Gig $gig): JsonResponse
   {
      $foundGig = $this->gig::findOrFail($gig->id);
      return response()->json($foundGig, JsonResponse::HTTP_OK);      
   }
   public function getActiveGigs(): JsonResponse
   {
      dd(true);
      return $this->gig->where('status' , 'active')->get();
   }
}
