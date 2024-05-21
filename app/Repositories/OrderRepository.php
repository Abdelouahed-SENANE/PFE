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

   public function myOrders($id)
   {
      
      $freelancerOrders = $this->order->select('id', 'gig_id', 'client_id', 'received_at', 'status')
         ->with(['client.user:id,name', 'gig:id,freelancer_id,title'])
         ->whereHas('gig', function ($query) use ($id) {
            $query->where('freelancer_id', $id);
         })
         ->whereHas('client', function ($query) use ($id) {
            $query->whereHas('orders', function ($subquery) use ($id) {
               $subquery->whereHas('gig', function ($subsubquery) use ($id) {
                  $subsubquery->where('freelancer_id', $id);
               });
            });
         })
         ->get();

      $pendingOrders = [];
      $progressOrders = [];
      $completedOrders = [];
      $cancelOrders = [];

      foreach ($freelancerOrders as $order) {
         $formattedOrders = [
            'order_id' => $order->id,
            'buyer' => $order->client->user->name,
            'gig' => $order->gig->title,
            'dueOn' => $order->received_at,
            'status' => $order->status,
         ];


         switch ($order->status) {
            case 'PENDING':
               $pendingOrders[] = $formattedOrders;
               break;
            case 'IN_PROGRESS':
               $progressOrders[] = $formattedOrders;
               break;
            case 'COMPLETED':
               $completedOrders[] = $formattedOrders;
               break;
            case 'CANCELLED':
               $cancelOrders[] = $formattedOrders;
               break;
         }
      }


      $tabs = [
         [
            'id' => 1,
            'label' => 'PENDING',
            'tableHead' => ['Buyer', 'Gig', 'Due on', 'Status', 'Action'],
            'rows' =>
            $pendingOrders

         ],
         [
            'id' => 2,
            'label' => 'IN PROGRESS',
            'tableHead' => ['Buyer', 'Gig', 'Due on', 'Status', 'Action'],
            'rows' =>
            $progressOrders

         ],
         [
            'id' => 3,
            'label' => 'COMPLETED',
            'tableHead' => ['Buyer', 'Gig', 'Due on', 'Status', 'Action'],
            'rows' =>
            $completedOrders

         ],
         [
            'id' => 4,
            'label' => 'CANCEL',
            'tableHead' => ['Buyer', 'Gig', 'Due on', 'Status', 'Action'],
            'rows' =>
            $cancelOrders

         ],
      ];

      return $tabs;
   }

   public function updateStatusOrder(string $orderId, string $status)
   {
      $order = $this->order->findOrFail($orderId);
      $order->status = $status;
      $order->save();
      return $order;
   }

   public function canPurchase( $gigId,  $clientId)
   {
      $lastCompletedOrder = $this->order
      ->where('gig_id', $gigId)
      ->where('client_id', $clientId)
      ->where('payment_status' , 'PAID')
      ->latest('received_at')
      ->first();
     return $lastCompletedOrder;
   }

   public function checkOrderIsRated($clientId , $gigId)
   {
      $orders = $this->order->with('rating')->where('status' , 'COMPLETED')->where('client_id' , $clientId)->where('gig_id' , $gigId)->get();
      return $orders;
   }

   public function getOrderReviewStatus($orderId)
   {
      $order = $this->order->findOrFail($orderId);
      if($order){
         return $order->rating ? true : false;
      }
      return false;
   }
}
