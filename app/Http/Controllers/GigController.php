<?php

namespace App\Http\Controllers;

use App\Dto\GigDto;
use App\Http\Requests\GigRequest;
use App\Models\Gig;
use App\Services\GigService;
use Exception;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

class GigController extends Controller
{
    //

    public function __construct(protected GigService $gigService)
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
}
