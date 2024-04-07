<?php
namespace App\Repositories\Interfaces;

use App\Models\Freelancer;
use App\Models\Gig;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;

interface GigRepositoryInterface {
    public function all() : JsonResponse;
    public function createGig(array $attributes , Freelancer $freelancer);
    public function updateGig(Gig $gig , array $attributes) : Gig;
    public function deleteGig(Gig $gig);
}
