<?php

namespace App\Services;

use App\Dto\OrderDto;
use App\Repositories\Interfaces\OrderRepositoryInterface;
use App\Services\Interfaces\OrderServiceInterface;
use Exception;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class OrderService implements OrderServiceInterface
{
    public function __construct(protected OrderRepositoryInterface $orderRepository)
    {
        
    }
    public function all(){}

    public function createOrder(OrderDto $orderDTO , $session_id)
    {    
        $user = JWTAuth::user(); 
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $client = $user->client()->first();
        return $this->orderRepository->createOrder($orderDTO, $client , $session_id);
    }
    public function updateStatusPayment($session_id)
    {
        $order = $this->orderRepository->showBySessionId($session_id);

        if (!$order) {
            throw new \Exception('Order not found for session ID: ' . $session_id);
        }
    
        $updated = $this->orderRepository->updateStatusPayment($order);
    
        if ($updated) {
            return $order; 
        } else {
            throw new \Exception('Failed to update payment status for order');
        }
    }
    public function countOrders()
    {
        return $this->orderRepository->countOrders();
    }

    public function recentTransactions()
    {
    return $this->orderRepository->recentTransactions();
    }
}
