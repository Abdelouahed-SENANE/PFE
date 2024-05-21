<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MessageSentEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $user;
    public $conversation;
    public $message;
    /**
     * Create a new event instance.
     */
    public function __construct($conversation , $user , $message)
    {
        //
        $this->message = $message;
        $this->user = $user;
        $this->conversation = $conversation;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PresenceChannel('chat.dm.'.$this->conversation),
        ];
    }

    public function broadcastWith() {
        return [
            'id' => $this->user->id,
            'name' => $this->user->name,
            'message' => $this->message,
            'coversation' => $this->conversation,
            'on' => now()->toDateTimeString()
        ];
    }
    public function broadcastAs() {
        return 'new-message';
    }
}
