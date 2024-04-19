<?php

namespace App\Dto;

use App\Http\Requests\OrderRequest;

class OrderDto
{
    public function __construct(
        public readonly ?int $gig_id,
        public readonly ?string $received_at,


    ) {
    }

    public static function fromRequest(OrderRequest $request): OrderDto
    {
        $validedData = $request->validated();
        return new self(
            gig_id: $validedData['gig_id'],
            received_at:$validedData['received_at'],
        );
    }
    public function toArray(): array
    {
        return [
            'gig_id' => $this->gig_id,
            'received_at' => $this->received_at,
        ];
    }
}
