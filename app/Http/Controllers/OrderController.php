<?php

namespace App\Http\Controllers;

use App\Dto\OrderDto;
use App\Http\Requests\GigRequest;
use App\Http\Requests\OrderRequest;
use App\Services\Interfaces\OrderServiceInterface;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

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
                return $this->success(['canPurchase' => true] , 'can purchase this gig now', 200);
            } else {
                return $this->success(['canPurchase' => false] , 'Cannot purchase this gig now', 200);
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

    public function checkClientHasOrderAndRating($gigId)
    {
        try {
            $clientId = JWTAuth::user()->client()->first()->id;
            if (!$clientId) {
                return $this->error('Unauthorized', 403);
            }
            $canRating = $this->orderService->clientHasOrderedAndRated($clientId, $gigId);
            if ($canRating) {
                return $this->success($canRating, 'Can rating this order', 200);
            } else {
                return $this->success($canRating, 'Cannot rating this order', 200);
            }
        } catch (Exception $e) {
            return $this->error($e->getMessage(), 500);
        }
    }
}
