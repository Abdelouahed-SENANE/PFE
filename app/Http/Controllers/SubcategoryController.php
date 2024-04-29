<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubcategoryRequest;
use App\Models\Category;
use App\Models\Subcategory;
use App\Services\SubcategoryService;
use App\Traits\ApiResponse;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class SubcategoryController extends Controller
{
    //
    use ApiResponse;
    public function __construct(protected SubcategoryService $subcategoryService)
    {
    }
    public function store(SubcategoryRequest $request): JsonResponse
    {

        $payload = $request->validated();
        try {
            $response = $this->subcategoryService->create($payload);
            return response()->json([
                'message' => 'Subcategory Created succefully',
                'subcategory' => $response,
            ], Response::HTTP_CREATED);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to Create subcategory',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function index()
    {
        return $this->subcategoryService->all();
    }

    public function destroy($id)
    {

        try {
            $deleted = $this->subcategoryService->destroy($id);
            return response()->json([
                'message' => 'Subcategory deleted succefully',
                'subcategory' => $deleted,
            ], Response::HTTP_NO_CONTENT);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to delete subcategory',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show($id)
    {

        try {
            $subcategory = $this->subcategoryService->show($id);
            return response()->json([
                'subcategory' => $subcategory,
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to delete subcategory',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update(SubcategoryRequest $request , $id){
        try {
            $updated = $this->subcategoryService->update($request , $id);
            return response()->json([
                'message' => 'Subcategory updated succefully',
                'subcategory' => $updated,
            ], Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Failed to updated subcategory',
                'error' => $e->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function getSubcategoryUsage(){
        try {
            $subcategoryMostUsed = $this->subcategoryService->getSubcategoryUsage();
            return $this->success($subcategoryMostUsed, 'Request Succefully');
        } catch (Exception $e) {
            return $this->error($e->getMessage());
        }
    }
}
