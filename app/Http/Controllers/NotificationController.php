<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    //
    use ApiResponse;
    public function show(){
        $notifications = auth()->user()->notifications;
        return $this->success($notifications , 'get my notification' , 200);
    }

    public function markAsRead($notificationId) {
        $user = auth()->user();
        $notification = $user->notifications->find($notificationId);
        if ($notification) {
            $notification->markAsRead();
        }
    }
}
