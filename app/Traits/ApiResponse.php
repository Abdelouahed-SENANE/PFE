<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;

trait ApiResponse
{
    /**
     * Return a success JSON response.
     *
     * @param  array|string  $data
     * @param  string|null  $message
     * @param  int  $code
     * @return \Illuminate\Http\JsonResponse
     */
    protected function success($data, ?string $message = null, int $code = 200): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    /**
     * Return an error JSON response.
     *
     * @param  string|null  $message
     * @param  int  $code
     * @param  mixed|null  $data
     * @return \Illuminate\Http\JsonResponse
     */
    protected function error(?string $message = null, int $code = 400, $data = null): JsonResponse
    {
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'data' => $data
        ], $code);
    }
}
