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


     public function create($subcategory)
     {   

         return $this->subcategoryRepository->create($subcategory);

     }
     public function update($attributes, $subcategoryId)
     {
        return $this->subcategoryRepository->update($attributes , $subcategoryId);
     }
     public function destroy($id)
     {
         return $this->subcategoryRepository->destroy($id);
     }
     public function show($id)
     {
        return $this->subcategoryRepository->show($id);
     }
}