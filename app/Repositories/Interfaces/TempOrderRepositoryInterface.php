<?php
namespace App\Repositories\Interfaces;

use App\Dto\GigDto;
use App\Dto\OrderDto;
use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Gig;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

interface GigRepositoryInterface {
    // public function all() : JsonResponse;
    public function createTempOrder(OrderDto $gigDto , Client $client);
    public function deleteGig(Gig $gig);

}
