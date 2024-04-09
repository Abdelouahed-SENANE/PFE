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
    public function updateGig(GigDto $gigDto , Gig $gig): Gig;
    public function deleteGig(Gig $gig);
    public function updateStatus($gigId , $status);
}
