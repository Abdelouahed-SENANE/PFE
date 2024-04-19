<?php

namespace App\Http\Controllers;

use App\Dto\OrderDto;
use App\Http\Requests\GigRequest;
use App\Http\Requests\OrderRequest;
use App\Services\Interfaces\OrderServiceInterface;
use Exception;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    //
    public function __construct(protected OrderServiceInterface $orderService)
    {
    }
    public function index()
    {
        dd('Hello');
    }
    public function store(OrderRequest $request)
    {

        $orderDTO = OrderDto::fromRequest($request);
        try {
            $this->orderService->createOrder($orderDTO);
            return response()->json([
                'status' => true,
                'messgae' => 'Order Created Succefully',

            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'messgae' => 'Failed to create order',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
