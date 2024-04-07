<?php


namespace App\Services;

use App\Models\Subcategory;
use App\Models\Category;
use App\Repositories\SubcategoryRepository;
use App\Services\Interfaces\SubcategoryServiceInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class SubcategoryService implements SubcategoryServiceInterface{


    /**
     * @var $SubcategoryRepository
     */
    protected $subcategoryRepository;

    /**
     * @param SubcategoryRepository $SubcategoryRepository
     */

     public function __construct(SubcategoryRepository $subcategoryRepository)
     {
        $this->subcategoryRepository = $subcategoryRepository;

     }

     public function all() : JsonResponse
     {
         return  $this->subcategoryRepository->all();
     }


     public function create(Subcategory $subcategory, Category $category): JsonResponse
     {   
         return $this->subcategoryRepository->create($subcategory , $category);

     }
     public function destroy(Subcategory $subcategory): JsonResponse
     {
         return $this->subcategoryRepository->destroy($subcategory);
     }
}