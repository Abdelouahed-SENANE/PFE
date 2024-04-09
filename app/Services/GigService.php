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
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

class GigService implements GigServiceInterface
{

    public function __construct(protected GigRepositoryInterface $gigRepository)
    {
    }

    public function all(): JsonResponse
    {
        return $this->gigRepository->all();
    }

    public function createGig(GigDto $gigDto): Gig
    {
        $user = JWTAuth::user();
        $freelancer = $user->freelancer()->first();

        return $this->gigRepository->createGig($gigDto, $freelancer);
    }
    public function updateGig(GigDto $gigDto, Gig $gig): Gig
    {
        $user = JWTAuth::user();
        $freelancer = $user->freelancer()->first();

        if ($freelancer->id === $gig->freelancer_id) {
            return $this->gigRepository->updateGig($gig, $gigDto);
        } else {
            return response()->json([
                'massage' => "Can't update this gig"
            ], Response::HTTP_FORBIDDEN);
        }
    }
    public function deleteGig(Gig $gig)
    {
        $user = JWTAuth::user();
        $freelancer = $user->freelancer()->first();
        if ($freelancer->id === $gig->freelancer_id) {
            $this->gigRepository->deleteGig($gig);
            return response()->json([
                'message' => 'Gig deleted succfully',
            ]);
        }else{
            return response()->json([
                'massage' => "Can't delete this gig"
            ], Response::HTTP_FORBIDDEN);
        }
    }

    public function updateStatus($gigId, $status)
    {
        return $this->gigRepository->updateStatus($gigId , $status);
    }
}
