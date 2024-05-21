<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Services\Interfaces\MessageServiceInterface;
use App\Traits\ApiResponse;
use Exception;

class MessageController extends Controller
{
    //
    public function __construct(protected MessageServiceInterface $service)
    {
        
    }
    use ApiResponse;
    public function index(){
        
    }

    public function store(MessageRequest $request){

        $payload = $request->validated();
        try {
            $message = $this->service->store($payload);
            return $this->success($message , 'message added succfully' , 201);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        
    }
}
