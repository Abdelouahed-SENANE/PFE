<?php

namespace App\Http\Controllers;

use App\Http\Requests\ConversationRequest;
use App\Services\Interfaces\ConversationServiceInterface;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\JsonResponse;

use function Laravel\Prompts\error;

class ConversationController extends Controller
{
    //
    use ApiResponse;
    public function __construct(protected ConversationServiceInterface $service)
    {
    }

    public function index()
    {
        try {
            $conversations = $this->service->all();
            return $this->success($conversations , 'Succsfully' ,200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
    public function store(ConversationRequest $request): JsonResponse
    {
        $payload = $request->validated();
        try {
            $data = $this->service->store($payload);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
        return $this->success($data, "Conversation created successfully", 201);
    }

    public function getMessages($conversation){
        try {
            $messages = $this->service->getConversationMessages($conversation);
            return $this->success($messages , 'Get messages Succefully' , 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
    public function getReciever($conversation){
        try {
            $reciever = $this->service->getReciever($conversation);
            return $this->success($reciever , 'Get reciever Succefully' , 200);
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }

    // public function  getLastMessageOfConversation($conversation) {
    //     try {
    //         $lastMessage = $this->service->lastMessage($conversation);
    //         return $this->success($lastMessage , 'Get last message succefully' , 200);
    //     } catch (Exception $e) {
    //         return $this->error($e->getMessage());
    //     }
    // }
    public function readMessages($conversation) {
        try {
            $readMessage = $this->service->readMessages($conversation);
            return $this->success($readMessage , 'all messages is readed' , 200);
        } catch (Exception $e) {
            return error($e->getMessage());
        }
    }


}
