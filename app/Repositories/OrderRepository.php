<?php

namespace App\Repositories;

use App\Dto\OrderDto;
use App\Models\Client;
use App\Models\Freelancer;
use App\Models\Order;
use App\Repositories\Interfaces\OrderRepositoryInterface;

class OrderRepository implements OrderRepositoryInterface
{

   /**
    * @var Order
    */
   protected $order;

   /**
    * @param Order $user
    */

   public function __construct(Order $order)
   {
      $this->order = $order;
   }

   public function all()
   {
   }

   public function createOrder(OrderDto $orderDTO, Client $client, $session_id)
   {
      $attributes = array_merge($orderDTO->toArray(), ['session_id' => $session_id]);
      return $client->orders()->create($attributes);
   }

   public function updateStatusPayment(Order $order)
   {
      $order->payment_status = 'PAID';
      return $order->save();
   }
   public function showBysessionId($session_id)
   {
      return $this->order->where('session_id', $session_id)->where('status', 'PENDING')->first();
   }
   public function countOrders()
   {
      return $this->order->all()->count();
   }
   public function recentTransactions()
   {
      $recentTransactions = $this->order
    ->select('id', 'client_id', 'gig_id', 'created_at')
    ->with([
        'client:id,user_id', 
        'client.user:id,name', 
        'gig:id,freelancer_id,price', 
        'gig.freelancer:id,user_id', 
        'gig.freelancer.user:id,name', 
    ])
    ->whereIn('id', function ($query) {
        $query->select('id')
            ->from('orders')
            ->where('payment_status', 'PAID')
            ->latest('created_at')
            ->orderByDesc('created_at')
            ->limit(3);
    })
    ->get();

return $recentTransactions;
   }
}
