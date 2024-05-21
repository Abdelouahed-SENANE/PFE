<?php

namespace App\Repositories\Interfaces;

use App\Models\Conversation;
use App\Models\User;

interface ConversationRepositoryInterface
{
    public function all(User $user);
    public function create(array $payload);
    public function checkConversationExists(int $user);
    public function exists(Conversation $conversation, int $user);
    public function getMessagesByConversation(int $conversation);
    public function participants(int $conversation);
    public function readMessages(int $conversation , $userID);
    
}
