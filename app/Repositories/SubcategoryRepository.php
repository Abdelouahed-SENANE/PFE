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
    public function create(Subcategory $subcategory, Category $category): JsonResponse
    {
        try {
            $newSubcategory = $category->subcategories()->create([
                'name' => $subcategory->name
            ]);
            return response()->json([
                'message' => 'Subcategory created succefully',
                'subcategory' => $newSubcategory
            ], Response::HTTP_CREATED);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to create subcategory',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy(Subcategory $subcategory): JsonResponse
    {
        $deleted = $subcategory->delete();
        if ($deleted) {
            return response()->json([
                'message' => 'Subcategory deleted succefully',
                'subcategory' => $subcategory,
            ]);
        } else {
            return response()->json([
                'message' => 'Failed to delete subcategory',
                'subcategory' => $subcategory,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
