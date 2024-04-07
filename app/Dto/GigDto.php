<?php

namespace App\Dto;

use App\Http\Requests\GigRequest;
use App\Models\Freelancer;
use App\Models\Subcategory;
use Illuminate\Http\Request;

class GigDto
{
    public function __construct(
        public readonly string $title,
        public readonly string $description,
        public readonly string $excerpt,
        public readonly float $price,
        public readonly array $images,
        public readonly int $delivery,
        public readonly array $search_tags,
        public readonly Subcategory $subcategory,
    ) {
    }

    public static function fromRequest(GigRequest $request): GigDto
    {
        $validedData = $request->validated();
        $subcategory = Subcategory::findOrFail($request->subcategory_id);
        
        return new self(
            $validedData['title'],
            $validedData['description'],
            $validedData['excerpt'],
            $validedData['price'],
            $validedData['images'], 
            $validedData['delivery'], 
            $validedData['search_tags'],
            $subcategory
        );
    }
}
