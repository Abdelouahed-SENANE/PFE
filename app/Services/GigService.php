<?php

namespace App\Services;

use App\DTO\GigDto;
use App\Models\Freelancer;
use App\Models\Subcategory;
use App\Models\Gig;
use App\Repositories\Interfaces\GigRepositoryInterface;
use App\Services\Interfaces\GigServiceInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
    public function show(Gig $gig)
    {
        return $this->gigRepository->show($gig);
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
}
