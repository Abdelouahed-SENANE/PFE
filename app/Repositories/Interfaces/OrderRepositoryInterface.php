<?php
namespace App\Repositories\Interfaces;

use App\Dto\OrderDto;
use App\Models\Client;
use App\Models\Order;

interface OrderRepositoryInterface {
    public function all();
    public function createOrder(OrderDto $orderDTO , Client $client , $session_id);
    public function updateStatusPayment(Order $order);
    public function showBysessionId($session_id);
}
