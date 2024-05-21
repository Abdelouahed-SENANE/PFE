<?php

namespace App\Http\Controllers;

use App\Notifications\NewMessageNotification;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotificationController extends Controller
{
    //
    use ApiResponse;
    public function show()
    {
        $user = auth()->user();
        $notifications = DB::table('notifications')
            ->where('notifiable_id', $user->id)
            ->where('type', '!=', NewMessageNotification::class)
            ->get();
            $parsedNotifications = $notifications->map(function ($notification) {
                $notification->data = json_decode($notification->data);
                return $notification;
            });
        
        return $this->success($parsedNotifications, 'Get my notifications', 200);
    }

    public function markAsRead($notificationId)
    {
        $user = auth()->user();
        $notification = $user->notifications->find($notificationId);
        if ($notification) {
            $notification->markAsRead();
        }
    }
    public function showNewMessageNotification()
    {
        $user = auth()->user();
        $notifications = DB::table('notifications')
            ->where('notifiable_id', $user->id)
            ->where('type', '=', NewMessageNotification::class)
            ->get();
            $parsedNotifications = $notifications->map(function ($notification) {
                $notification->data = json_decode($notification->data);
                return $notification;
            });
        
        return $this->success($parsedNotifications, 'Get new mesage notifications', 200);
    }
}
