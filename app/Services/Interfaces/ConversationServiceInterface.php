<?php
namespace App\Services\Interfaces;

interface ConversationServiceInterface {
    public function all();
    public function store(Array $paylod);
    public function getConversationMessages(int $conversation);
    public function getReciever(int $conversation);
    public function readMessages(int $conversation);

}