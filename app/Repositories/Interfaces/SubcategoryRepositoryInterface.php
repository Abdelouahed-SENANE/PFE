<?php

namespace App\Repositories\Interfaces;

use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\JsonResponse;

interface SubcategoryRepositoryInterface
{
    public function all(): JsonResponse;
    public function create(Subcategory $subcategory , Category $category) : JsonResponse;
    public function destroy(Subcategory $subcategory) : JsonResponse;
}
