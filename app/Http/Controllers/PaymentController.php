<?php

namespace App\Http\Controllers;

use App\Dto\OrderDto;
use App\Events\NewOrderEvent;
use App\Http\Requests\OrderRequest;
use App\Notifications\OrderNotification;
use App\Services\Interfaces\OrderServiceInterface;
use Exception;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;

class PaymentController extends Controller
{
    //
    public function __construct(protected OrderServiceInterface $orderService)
    {
    }
    public function checkout(OrderRequest $request)
    {
        $request->validate([
            'gig_id' => 'required|exists:gigs,id',
            'amount' => 'required|numeric|min:0',
            'currency' => 'required|string|in:usd',
            'gig_name' => 'required|string',
            'received_at' => 'required|date_format:Y-m-d H:i:s',
        ]);
        Stripe::setApiKey(env('STRIPE_SECRET'));
        try {
            $session = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price_data' => [
                        'currency' => $request->currency,
                        'product_data' => [
                            'name' => $request->gig_name,
                        ],
                        'unit_amount' => $request->amount * 100,
                    ],
                    'quantity' => 1
                ]],
                'mode' => 'payment',
                'success_url' => 'http://localhost:3000/payment-success?session_id={CHECKOUT_SESSION_ID} ',
                'cancel_url' => 'http://localhost:3000/payment-cancel',
            ]);

            $orderDTO = OrderDto::fromRequest($request);
            $this->orderService->createOrder($orderDTO, $session->id);
            return response()->json(['sessionId' => $session->id]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function handlePaymentSuccess(Request $request)
    {
        $sessionId = $request->get('session_id');
        $authUser = auth()->user();
        try {
            $order = $this->orderService->updateStatusPayment($sessionId);
            $order->load('gig.freelancer.user');
            $user = $order->gig->freelancer->user;
            if ($order) {
                broadcast(new NewOrderEvent($user));
                $user->notify(new OrderNotification($authUser));
            }
            return response()->json([
                'order' => $order,
                'message' => 'Payment status updated successfully'
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
