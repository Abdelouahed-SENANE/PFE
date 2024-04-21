<?php

namespace App\Http\Controllers;

use App\Dto\GigDto;
use App\Http\Requests\GigRequest;
use App\Models\Gig;
use App\Services\Interfaces\GigServiceInterface;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
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
    public function show(Gig $gig)
    {
        try {
            $gig = $this->gigService->show($gig);
            return response()->json([
                'gig' => $gig
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Something goes wrong while fetching a gig!'
            ], 500);
        }
    }
    public function myGigs()
    {
        return $this->gigService->myGigs();
    }
    public function store(GigRequest $request)
    {


        $gigDto = GigDto::fromRequest($request);
        try {
            $newGig = $this->gigService->createGig($gigDto);
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

    public function getPopularGigsOnWeek() {
        try {
            $popularService = $this->gigService->getPopularGig();
            return $this->success($popularService, 'Request Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
    public function getSalesByDayOfWeek() {
        try {
            $salesByDayOfWeek = $this->gigService->getSalesBydDayOfWeek();
            return $this->success($salesByDayOfWeek, 'Request Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
      public function countGigs() {
        try {
            $countGigs = $this->gigService->countGigs();
            return $this->success($countGigs, 'Request Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
