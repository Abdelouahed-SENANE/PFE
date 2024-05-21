<?php
namespace App\Services;

use App\Repositories\Interfaces\ConversationRepositoryInterface;
use App\Services\Interfaces\ConversationServiceInterface;
use Exception;

class ConversationService implements ConversationServiceInterface {

    public function __construct(protected ConversationRepositoryInterface $repository)
    {
        
    }
    public function all()
    {
        $user =auth()->user();
        $conversations = $this->repository->all($user);
        return $conversations;
    }
    public function store($payload)
    {
        $user = auth()->user();
        extract($payload);
        $conversation = $this->repository->checkConversationExists($reciever);
        $exists = $conversation && $this->repository->exists($conversation ,$user->id);
        if (!$exists) {
            $payload = [$reciever , $user->id];
            return $this->repository->create($payload);
        }else {
            throw new Exception('Conversation already exists');
        }
        return $conversation;
    }

    public function getConversationMessages(int $conversation)
    {
        return $this->repository->getMessagesByConversation($conversation);
    }
    public function getReciever(int $conversation){
        $user = auth()->user();
        $users = $this->repository->participants($conversation);
        $reciever = $users->filter(fn($reciever) =>  $reciever->id !== $user->id)->first();
        return $reciever;
    }
    // public function lastMessage($conversation) {
    //     return $this->repository->lastMessage($conversation);
    // }
    public function readMessages(int $conversation)
    {
        $user =auth()->user();
        try {
            return $this->repository->readMessages($conversation , $user->id);
        } catch (Exception) {
            throw new Exception('Failed to read messages');
        }
    }
}