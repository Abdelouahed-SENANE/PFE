<?php

namespace App\Dto;

use App\Http\Requests\GigRequest;
use App\Http\Requests\RatingRequest;

class RatingDto
{
    public function __construct(
        public readonly ?string $order_id,
        public readonly ?string $value,
        public readonly ?string $comment,

    ) {
    }

    public static function fromRequest(RatingRequest $request): RatingDto
    {
        $validedData = $request->validated();

        return new self(
            order_id: $validedData['order_id'],
            value: $validedData['value'],
            comment: $validedData['comment'],

        );
    }
    
    public function toArray(): array
    {
        return [
            'order_id' => $this->order_id,
            'value' => $this->value,
            'comment' => $this->comment,

        ];
    }
}
