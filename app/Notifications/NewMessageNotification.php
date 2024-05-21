<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class NewMessageNotification extends Notification
{
    use Queueable;
    public $newMessage;
    public $user;
    /**
     * Create a new notification instance.
     */
    public function __construct($user , $newMessage)
    {
        //
        $this->user = $user;
        $this->newMessage = $newMessage;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
            'newMessage' => $this->newMessage,
            'sender' => $this->user
        ];
    }
}
