<?php

namespace App\Dto;

use App\Http\Requests\OrderRequest;

class OrderDto
{
    public function __construct(
        public readonly ?int $gigId,

    ) {
    }

    public static function fromRequest(OrderRequest $request): OrderDto
    {
        $validedData = $request->validated();

        return new self(
            gigId : $validedData['gigId'],
        );
    }
    public function toArray(): Array
    {
        return [
            'gigId' => $this->gigId,
        ];
    }
}
