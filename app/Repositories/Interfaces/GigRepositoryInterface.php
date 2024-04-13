<?php
namespace App\Repositories\Interfaces;

use App\Dto\GigDto;
use App\Models\Freelancer;
use App\Models\Gig;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;

interface GigRepositoryInterface {
    public function all() : JsonResponse;
    public function createGig(GigDto $gigDto , Freelancer $freelancer);
    public function updateGig(int $gigId , GigDto $gigDto) : Gig;
    public function deleteGig(Gig $gig);
    public function updateStatus($gigId, $status);
    public function myGigs() : JsonResponse;
    public function show(Gig $gig): JsonResponse;
    public function getActiveGigs() : JsonResponse;
}
