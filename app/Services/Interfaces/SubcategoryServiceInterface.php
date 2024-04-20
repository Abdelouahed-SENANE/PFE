<?php

namespace App\Services\Interfaces;

use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\JsonResponse;

interface SubcategoryServiceInterface 
{

    public function all() : JsonResponse;
    public function create(Subcategory $subcategory);
    public function update($attributes , $subcategoryId);
    public function destroy($id);
    public function show($id);

}
