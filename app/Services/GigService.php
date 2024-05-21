<?php

namespace App\Services;

use App\DTO\GigDto;
use App\Models\Gig;
use App\Repositories\Interfaces\GigRepositoryInterface;
use App\Services\Interfaces\GigServiceInterface;
use Error;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

class GigService implements GigServiceInterface
{
    public function __construct(protected GigRepositoryInterface $gigRepository)
    {
    }
    public function getActiveGigs(Request $request)
    {

        return $this->gigRepository->getActiveGigs($request);
    }
    public function all(): JsonResponse
    {
        return $this->gigRepository->all();
    }
    public function myGigs(): JsonResponse
    {
        return $this->gigRepository->myGigs();
    }
    public function getGigWithCheckOrderByClient(Gig $gig, $clientId)
    {
        return $this->gigRepository->getGigWithCheckOrderByClient($gig , $clientId);

    }
    public function createGig(GigDto $gigDto): Gig
    {
        $user = JWTAuth::user();
        $freelancer = $user->freelancer()->first();

        return $this->gigRepository->createGig($gigDto, $freelancer);
    }
    public function updateGig(GigDto $gigDto, $gigId): Gig
    {
        $user = JWTAuth::user();
        $freelancer = $user->freelancer()->first();
        $gig = Gig::findOrFail($gigId);
        if ($freelancer->id === $gig->freelancer_id) {
            return $this->gigRepository->updateGig($gigId, $gigDto);
        } else {
            return response()->json([
                'massage' => "Can't update this gig"
            ], Response::HTTP_FORBIDDEN);
        }
    }
    public function deleteGig($gigId)
    {
        $user = JWTAuth::user();
        $freelancer = $user->freelancer()->first();
        $gig = Gig::findOrFail($gigId);
        if ($freelancer->id === $gig->freelancer_id) {

            $this->gigRepository->deleteGig($gig);
            return response()->json([
                'message' => 'Gig deleted succfully',
            ]);
        } else {
            return response()->json([
                'massage' => "Can't delete this gig"
            ], Response::HTTP_FORBIDDEN);
        }
    }

    public function updateStatus($gigId, $status)
    {
        return $this->gigRepository->updateStatus($gigId, $status);
    }
    public function getPendingGigs()
    {
        return $this->gigRepository->getPendingGigs();
    }
    public function getPopularGig() {
        return $this->gigRepository->getPopularGigOnWeek();
    }
    public function getSalesBydDayOfWeek()
    {
        return $this->gigRepository->getSalesBydDayOfWeek();
    }

    public function countGigs()
    {
        return $this->gigRepository->countGigs();
    }

    public function getAllReviewsByGigId($gigId)
    {
        try {
            return $this->gigRepository->getAllReviewsByGigId($gigId);
        } catch (Exception $e) {
           throw new Error('Failed to fetch All Reviews '. $e->getMessage() , 400);
        }
    }

     public function getLastGigs()
     {
        return $this->gigRepository->getLastGigs();
     }
}
