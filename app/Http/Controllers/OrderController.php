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
    public function countOrders()
    {
        try {
            $ordersCount = $this->orderService->countOrders();
            return $this->success($ordersCount , 'Succesfullt');
        } catch (\Throwable $th) {
            return $this->error($th->getMessage());
        }
    }


    public function recentTransactions() {
        try {
            $recentTransactions = $this->orderService->recentTransactions();
            return $this->success($recentTransactions , 'Succesfull');
        } catch (\Throwable $th) {
            return $this->error($th->getMessage());
        }
    }
}
