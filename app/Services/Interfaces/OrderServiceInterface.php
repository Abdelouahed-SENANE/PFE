<?php

namespace App\Services\Interfaces;

use App\Dto\OrderDto;
use App\Models\Client;


interface OrderServiceInterface
{
    public function all();
    public function createOrder(OrderDto $orderDTO , $session_id);
    public function updateStatusPayment($session_id);
}