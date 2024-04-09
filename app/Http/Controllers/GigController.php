<?php

namespace App\Http\Controllers;

use App\Dto\GigDto;
use App\Http\Requests\GigRequest;
use App\Models\Gig;
use App\Services\Interfaces\GigServiceInterface;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GigController extends Controller
{
    //

    public function __construct(protected GigServiceInterface $gigService)
    {
    }


    public function index()
    {
        return $this->gigService->all();
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

    public function update(GigRequest $request, Gig $gig)
    {

        $gigDto = GigDto::fromRequest($request);
        try {
            $updateGig = $this->gigService->updateGig($gigDto , $gig);
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

    public function destroy(Gig $gig){
        return $this->gigService->deleteGig($gig);
    }

    public function updateStatus(Request $request , $gigId){
        $validated = $request->validate([
            'status' => 'required'
        ]);
        try {
            $updateStatus = $this->gigService->updateStatus($gigId , $validated['status']);
            return response()->json([
                'message' => 'Status updated succefully',
                'updatedStatus' => $updateStatus
            ], Response::HTTP_CREATED);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to status gig',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
