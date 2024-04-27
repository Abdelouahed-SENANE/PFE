<?php

namespace App\Services;

use App\Dto\OrderDto;
use App\Models\Order;
use App\Repositories\Interfaces\OrderRepositoryInterface;
use App\Services\Interfaces\OrderServiceInterface;
use Carbon\Carbon;
use Error;
use Exception;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class OrderService implements OrderServiceInterface
{
    public function __construct(protected OrderRepositoryInterface $orderRepository)
    {
    }
    public function all()
    {
    }

    public function createOrder(OrderDto $orderDTO, $session_id)
    {
        $user = JWTAuth::user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $client = $user->client()->first();
        return $this->orderRepository->createOrder($orderDTO, $client, $session_id);
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
    public function myOrders()
    {
        $id = JWTAuth::user()->id;
        return $this->orderRepository->myOrders($id);
    }
    public function updateStatusOrder($orderId, $request)
    {
        $status = $request->status;
        return $this->orderRepository->updateStatusOrder($orderId, $status);
    }

    public function canPurchase($gigId)
    {
        $authUser = JWTAuth::user();
        $clientId = $authUser->client()->first()->id;
        $lastOrderCompleted = $this->orderRepository->canPurchase($gigId, $clientId);
        if ($lastOrderCompleted) {
            $lastReceivedAt = Carbon::parse($lastOrderCompleted->received_at);
            if ($lastReceivedAt->isFuture()) {
                return false;
            }else{

                return true;
            }
        }else{
            return true;
        }
    }

    public function clientHasOrderedAndRated($clientId, $gigId)
    {


        try {

            $orders =  $this->orderRepository->checkOrderIsRated($clientId, $gigId);
            $canRating = false;
            $order_id = null;
            foreach ($orders as $order) {
                if (!$order->rating) {
                    $canRating = true;
                    $order_id = $order->id;
                }
            }
            return ['canRating' => $canRating, 'order_id' => $order_id];
        } catch (Exception $e) {
            throw new Error('Failed to check rating' . $e->getMessage(), 400);
        }
    }
}
