<?php

namespace App\Events;

use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;

;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewGigCreated implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $user;
    public $gig;
    /**
     * Create a new event instance.
     */
    public function __construct($gig , $user)
    {
        //
        $this->gig = $gig;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): Channel
    {
        // return [
            return new PrivateChannel ('gig-channel');
        // ];
    }
    public function broadcastAs()
    {
        return 'new-gig';
    }
    // public function broadcastWith()
    // {
    //     return [
    //         'name' => $this->user->name,
    //         'picture' => $this->user->picture,
    //         'title' => $this->gig->title,
    //         'on' => now()
    //     ];
    // }
}
