<?php

namespace App\Repositories\Interfaces;

use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\JsonResponse;

interface SubcategoryRepositoryInterface
{
    public function all(): JsonResponse;
    public function create(Subcategory $subcategory);
    public function update($attributes , $subcategoryId);
    public function destroy($id);
    public function show($id);
}
