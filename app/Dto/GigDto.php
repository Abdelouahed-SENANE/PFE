<?php

namespace App\Dto;

use App\Http\Requests\GigRequest;
use App\Models\Freelancer;
use App\Models\Subcategory;
use Illuminate\Http\Request;

class GigDto
{
    public function __construct(
        public readonly ?string $title,
        public readonly ?string $description,
        public readonly ?string $excerpt,
        public readonly ?float $price,
        public readonly ?array $images,
        public readonly ?int $delivery,
        public readonly ?array $searchTags,
        public readonly ?Subcategory $subcategory,
    ) {
    }

    public static function fromRequest(GigRequest $request): GigDto
    {
        $validedData = $request->validated();
        $subcategory = Subcategory::findOrFail($request->subcategory_id);

        return new self(
            title: $validedData['title'],
            description: $validedData['description'],
            excerpt: $validedData['excerpt'],
            price: $validedData['price'],
            images: self::uploadImages($request),
            delivery: $validedData['delivery'],
            searchTags: $validedData['search_tags'],
            subcategory: $subcategory
        );
    }
    private static function uploadImages(GigRequest $request): array
    {
        $imagesName = [];
        $i = 0;
        if ($request->hasFile('images')) {
            
            foreach ($request->file('images') as $image) {
                $imageName = time() . $i++ . '.' . $image->getClientOriginalExtension();

                $image->storeAs('public/uploads', $imageName);

                $imagesName[] = $imageName;
            }
        }
        return $imagesName;
    }
    public function toArray(): array
    {
        return [
            'title' => $this->title,
            'description' => $this->description,
            'excerpt' => $this->excerpt,
            'images' => $this->images,
            'price' => $this->price,
            'search_tags' => $this->searchTags,
            'delivery' => $this->delivery,
            'subcategory_id' => $this->subcategory->id
        ];
    }
}
