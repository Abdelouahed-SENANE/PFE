<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubcategoryRequest;
use App\Models\Category;
use App\Models\Subcategory;
use App\Services\SubcategoryService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class SubcategoryController extends Controller
{
    //
    public function __construct(protected SubcategoryService $subcategoryService)
    {
        
    }
    public function store(SubcategoryRequest $request, Category $category):JsonResponse {

        $payload = $request->validated();
        $subcategory = new Subcategory();
        $subcategory->fill($payload);

        $response = $this->subcategoryService->create($subcategory , $category);
        return $response;
    }

    public function index(){
        return $this->subcategoryService->all();
    }

    public function destroy(Subcategory $subcategory):JsonResponse {
        return $this->subcategoryService->destroy($subcategory);
    }

}
