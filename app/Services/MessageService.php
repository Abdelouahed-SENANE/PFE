<?php

namespace App\Services;

use App\Events\MessageSentEvent;
use App\Notifications\NewMessageNotification;
use App\Repositories\Interfaces\MessageRepositoryInterface;
use App\Services\Interfaces\MessageServiceInterface;
use Illuminate\Support\Facades\Notification;

class MessageService implements MessageServiceInterface {

    public function __construct(protected MessageRepositoryInterface $repository)
    {
        
    }
    public function all()
    {
        
    }
    public function store(array $payload)
    {
        $sender = auth()->user();
        extract($payload);
        $message = $this->repository->store($sender , $conversation , $message);
        broadcast(new MessageSentEvent($conversation , $sender , $message));
        return $message;
    }
    
}
