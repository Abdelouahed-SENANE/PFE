<?php
namespace App\Repositories\Interfaces;

use App\Dto\OrderDto;
use App\Models\Freelancer;
use App\Models\Order;
use Illuminate\Http\JsonResponse;

interface OrderDtoRepositoryInterface {
    public function all() : JsonResponse;
    public function createOrderDto(OrderDto $orderDTO , Freelancer $freelancer);
    public function updateOrderDto(OrderDto $orderDTO , Order $order) : OrderDto;
    public function deleteOrderDto(OrderDto $gig);

}
