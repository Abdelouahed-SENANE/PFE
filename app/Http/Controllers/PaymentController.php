<?php

namespace App\Http\Controllers;

use App\Dto\OrderDto;
use App\Http\Requests\OrderRequest;
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

        try {
            // Update the payment status of the order using the OrderService
            $order = $this->orderService->updateStatusPayment($sessionId);

            // Return a JSON response with the updated order and success message
            return response()->json([
                'order' => $order,
                'message' => 'Payment status updated successfully'
            ], 200);
        } catch (Exception $e) {
            // Handle any exceptions and return an error response
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
