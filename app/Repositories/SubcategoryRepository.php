<?php

namespace App\Repositories;

use App\Models\Category;
use App\Models\Subcategory;
use App\Repositories\Interfaces\SubcategoryRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class SubcategoryRepository implements SubcategoryRepositoryInterface
{

    /**
     * @var Subcategory
     */

    /**
     * @param Subcategory $admin
     */

    public function __construct(protected Subcategory $subcategory)
    {
    }

    public function all(): JsonResponse
    {
        $subcategories = $this->subcategory->all();
        return response()->json([
            'subcategories' => $subcategories
        ], Response::HTTP_OK);
    }
    public function create($subcategory)
    {
        $category = Category::findOrFail($subcategory['category_id']);
        $newSubcategory = $category->subcategories()->create([
            'name' => $subcategory['name']
        ]);
        return $newSubcategory;
    }
    public function update($attributes, $subcategoryId)
    {
        $subcategory = $this->subcategory->findOrFail($subcategoryId);
        $subcategory->name = $attributes['name'];
        $subcategory->category_id = $attributes['category_id'];
        $subcategory->save();
        return $subcategory;
    }
    public function destroy($id)
    {
        $subcategory = $this->subcategory->find($id);
        return $subcategory->delete();
    }
    public function show($id)
    {
        return $this->subcategory->findOrFail($id);
    }
}
