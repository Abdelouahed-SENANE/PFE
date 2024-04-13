<?php

namespace App\Services\Interfaces;

use App\DTO\GigDto;
use App\Models\Category;
use App\Models\Freelancer;
use App\Models\Gig;
use App\Models\Subcategory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;

interface GigServiceInterface
{

    public function all() : JsonResponse;
    public function createGig(GigDto $gigDto): Gig;
    public function updateGig(GigDto $gigDto , int $gigId): Gig;
    public function deleteGig($gigId);
    public function updateStatus($gigId , $status);
    public function myGigs(): JsonResponse;
    public function show(Gig $gig): JsonResponse;
    public function getActiveGigs(): JsonResponse;
}
