<?php

namespace App\Http\Controllers;

use App\Dto\OrderDto;
use App\Http\Requests\GigRequest;
use App\Http\Requests\OrderRequest;
use App\Services\Interfaces\OrderServiceInterface;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    use ApiResponse;
    public function __construct(protected OrderServiceInterface $orderService)
    {
    }
    public function index()
    {
        dd('Hello');
    }
    // public function store(OrderRequest $request)
    // {

    //     $orderDTO = OrderDto::fromRequest($request);
    //     try {
    //         $this->orderService->createOrder($orderDTO);
    //         return response()->json([
    //             'status' => true,
    //             'messgae' => 'Order Created Succefully',

    //         ], 200);
    //     } catch (Exception $e) {
    //         return response()->json([
    //             'status' => false,
    //             'messgae' => 'Failed to create order',
    //             'error' => $e->getMessage(),
    //         ], 500);
    //     }
    // }
    public function canPurchase($gigId)
    {
        try {
            $canPlaceOrder = $this->orderService->canPurchase($gigId);

            if ($canPlaceOrder) {
                return $this->success(null, 'Customer can place order', 200);
            } else {
                return $this->error('Please wait until your current order is completed before placing a new order. Thank you!', 400);
            }
        } catch (\Throwable $th) {
            return $this->error($th->getMessage(), 500);
        }
    }
    public function countOrders()
    {
        try {
            $ordersCount = $this->orderService->countOrders();
            return $this->success($ordersCount, 'Succesfullt');
        } catch (\Throwable $th) {
            return $this->error($th->getMessage());
        }
    }


    public function recentTransactions()
    {
        try {
            $recentTransactions = $this->orderService->recentTransactions();
            return $this->success($recentTransactions, 'Succesfull');
        } catch (\Throwable $th) {
            return $this->error($th->getMessage());
        }
    }
    public function myOrders()
    {
        try {
            $myOrders = $this->orderService->myOrders();
            return $this->success($myOrders, 'Succesfull');
        } catch (\Throwable $th) {
            return $this->error($th->getMessage());
        }
    }
    public function updateStatusOrder(Request $request, $orderId)
    {
        try {
            $updateStatusOrder = $this->orderService->updateStatusOrder($orderId, $request);
            return $this->success($updateStatusOrder, 'Succesfull');
        } catch (\Throwable $th) {
            return $this->error($th->getMessage());
        }
    }

    public function checkClientHasOrderAndRating($orderId)
    {
        try {
            $checkClientIsRatedOrder = $this->orderService->clientHasOrderedAndRated($orderId);
            if ($checkClientIsRatedOrder) {
                return $this->success(['isRated' => true], null, 200);
            } else {
                return $this->success(['isRated' => false] , null, 200 );
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 500);
        }
    }
}
