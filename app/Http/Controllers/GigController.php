<?php

namespace App\Http\Controllers;

use App\Dto\GigDto;
use App\Events\NewGigCreated;
use App\Http\Requests\GigRequest;
use App\Models\Gig;
use App\Models\User;
use App\Services\Interfaces\GigServiceInterface;
use App\Traits\ApiResponse;
use Exception;
use App\Notifications\GigNotification;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;


class GigController extends Controller
{
    //
    use ApiResponse;
    public function __construct(protected GigServiceInterface $gigService)
    {
    }


    public function index()
    {
        return $this->gigService->all();
    }
    public function getAllReviewsByGigId($gigId)
    {
        try {
            $allReviews = $this->gigService->getAllReviewsByGigId($gigId);
            return $this->success($allReviews, 'Sucess response', 200);
        } catch (Exception $e) {
            return $this->error('Failed to get All reviews ' . $e->getMessage(), 400);
        }
    }
    public function getGigOrderedByClient(Gig $gig)
    {
        // $clientId =  JWTAuth::user()->client()->first()->id;
        $clientId = null;

        try {
            if (JWTAuth::user()) {
                $clientId =  JWTAuth::user()->client()->first()->id;
            }
            $gig = $this->gigService->getGigWithCheckOrderByClient($gig, $clientId);
            return $this->success($gig, 'Request Success', 200);
        } catch (Exception $e) {
            return $this->error('Error to fetch Gig' . $e->getMessage(), 500);
        }
    }
    public function myGigs()
    {
        return $this->gigService->myGigs();
    }
    public function store(GigRequest $request)
    {
        $freelancer = auth()->user();
        $gigDto = GigDto::fromRequest($request);
        try {
            $newGig = $this->gigService->createGig($gigDto);

            $users = User::with('admin')->get();
            if ($newGig) {
                broadcast(new NewGigCreated($newGig , $freelancer));
                foreach($users as $user){
                    if ($user->admin) {
                        $user->notify(new GigNotification($newGig , $freelancer));
                    }
                }
            }
            return response()->json([
                'message' => 'Gig Created succefully',
                'newGig' => $newGig
            ], Response::HTTP_CREATED);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to create gig',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function update(GigRequest $request, $gigId)
    {

        $gigDto = GigDto::fromRequest($request);
        try {
            $updateGig = $this->gigService->updateGig($gigDto, $gigId);
            return response()->json([
                'message' => 'Gig updated succefully',
                'updateGig' => $updateGig
            ], Response::HTTP_CREATED);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to update gig',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($gigId)
    {
        return $this->gigService->deleteGig($gigId);
    }

    public function activeGigs(Request $request)
    {

        try {
            $activeGigs = $this->gigService->getActiveGigs($request);
            return response()->json(
                $activeGigs,
                Response::HTTP_OK
            );
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to status gig',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function pendingGigs()
    {

        try {
            $pendingGigs = $this->gigService->getPendingGigs();
            return $this->success($pendingGigs, 'Request Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
    public function updateStatus(Request $request, $gigId)
    {
        $validated = $request->validate([
            'status' => 'required'
        ]);
        try {
            $updateStatus = $this->gigService->updateStatus($gigId, $validated['status']);
            return $this->success($updateStatus, 'Status updated succefully', 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 'Failed to status gig', 500);
        }
    }

    public function getPopularGigsOnWeek()
    {
        try {
            $popularService = $this->gigService->getPopularGig();
            return $this->success($popularService, 'Request Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
    public function getSalesByDayOfWeek()
    {
        try {
            $salesByDayOfWeek = $this->gigService->getSalesBydDayOfWeek();
            return $this->success($salesByDayOfWeek, 'Request Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
    public function countGigs()
    {
        try {
            $countGigs = $this->gigService->countGigs();
            return $this->success($countGigs, 'Request Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }


    // public function checkClientHasOrderAndRating($orderId)
    // {
    //     try {
    //         $checkClientIsRatedOrder = $this->gigService->clientHasOrderedAndRated($orderId);
    //         if ($checkClientIsRatedOrder) {
    //             return $this->success(['isRated' => true], null, 200);
    //         } else {
    //             return $this->success(['isRated' => false] , null, 200 );
    //         }
    //     } catch (Exception $e) {
    //         return $this->error($e->getMessage(), 500);
    //     }
    // }
    public function recentGigs() {
        try {
            $lastGigs = $this->gigService->getLastGigs();
            return $this->success($lastGigs , 'get last gigs succefully ' ,200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
