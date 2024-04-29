<?php

use App\Models\Admin;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return true;
});

// Broadcast::channel('notification', function () {
//     return true;
// });
Broadcast::channel('gig-channel', function ($user) {
    return $user->isAdmin();
});

Broadcast::channel('order.channel.{id}', function ($user , $userId) {
    return (int) $user->id === (int) $userId && $user->isFreelancer();
});
Broadcast::channel('completed.channel.{id}', function ($user , $userId) {
    return (int) $user->id === (int) $userId && $user->isClient();
});