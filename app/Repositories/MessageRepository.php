<?php
namespace App\Repositories;

use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use App\Repositories\Interfaces\MessageRepositoryInterface;

class MessageRepository implements MessageRepositoryInterface {

    public function __construct(protected Message $message)
    {
        
    }
    public function all()
    {
        
    }
    public function store(User $user, int $conversation, string $message)
    {
        return $user->messages()->create([
            'conversation_id' => $conversation,
            'message' => $message
        ]);
    }

    public function getUsers(int $conversation)
    {
        return Conversation::find($conversation)->users()->get();
    }


}