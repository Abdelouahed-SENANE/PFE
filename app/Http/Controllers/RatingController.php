<?php

namespace App\Http\Controllers;

use App\Dto\RatingDto;
use App\Http\Requests\RatingRequest;
use App\Services\Interfaces\RatingServiceInterface;
use App\Traits\ApiResponse;
use Exception;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class RatingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    use ApiResponse;
    public function __construct(protected RatingServiceInterface $service)
    {
        $this->service = $service;
    }
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RatingRequest $request)
    {

        try {
            $user = JWTAuth::user();
            if (!$user) {
                return $this->error('user not found',401);
            }
            $clientId = $user->client()->first()->id;
            $ratingDTO = RatingDto::fromRequest($request);

            $rating = $this->service->create($ratingDTO, $clientId);
            return $this->success($rating, 'Rating Created Succefully', 201);
        } catch (Exception $e) {
            return $this->error('Faild to create rating' . $e->getMessage(), 500);
        }
    }
}
