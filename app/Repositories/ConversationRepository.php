<?php

namespace App\Repositories;

use App\Models\Conversation;
use App\Models\Message;
use App\Repositories\Interfaces\ConversationRepositoryInterface;

class ConversationRepository implements ConversationRepositoryInterface
{
    public function __construct(protected Conversation $conversation)
    {
    }
    public function all($user)
    {
        $conversations = $user->conversations()
        ->with(['users' => function ($query) use ($user) {
            $query->where('users.id', '!=', $user->id); 
        } , 'lastMessage'])

        ->get()
        ->map(function ($conversation) use ($user) {
            $unreadCount = Message::where('conversation_id', $conversation->id)
                ->where('sender_id', '!=', $user->id)
                ->whereNull('read_at')
                ->count();
            $conversation->unread_count = $unreadCount;
            return $conversation;
        });

    return $conversations;
    }

    public function create(array $payload)
    {
        return $this->conversation->create()->users()->sync($payload);
    }
    public function exists($conversation, int $user)
    {
        return $conversation->users()->find($user);
    }
    public function checkConversationExists($reciever)
    {
        $conversation = $this->conversation->whereHas('users', function ($query) use ($reciever) {
            $query->where('users.id', $reciever);
        })->first();

        return $conversation;
    }
    public function getMessagesByConversation(int $conversation)
    {
        return $this->conversation->findOrFail($conversation)->messages()->with('sender')->orderBy('created_at')->paginate(100);  

    }
    public function participants(int $conversation)
    {
        return $this->conversation->find($conversation)->users()->get();

    }
    // public function lastMessage(int $conversation)
    // {
    //     $conversation = $this->conversation->findOrFail($conversation);
    //     return $conversation->messages()->latest()->first();

    // }
    public function readMessages(int $conversation , $userID)
    {
        $messages = $this->conversation->with(['messages' => function($query) use ($conversation, $userID) {
            $query->where('conversation_id', $conversation)
                  ->where('sender_id', '!=', $userID)
                  ->update(['read_at' => now()]);
        }])->find($conversation);
        if ($messages) {
            return true;
        }
    }
}
