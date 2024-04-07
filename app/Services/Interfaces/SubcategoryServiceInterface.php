<?php

namespace App\Services\Interfaces;

use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\JsonResponse;

interface SubcategoryServiceInterface 
{

    public function all() : JsonResponse;
    public function create(Subcategory $subcategory , Category $category):JsonResponse;
    public function destroy(Subcategory $subcategory):JsonResponse;
}
