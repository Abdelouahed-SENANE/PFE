<?php

namespace App\Repositories;

use App\Models\Category;
use App\Models\Gig;
use App\Models\Subcategory;
use App\Repositories\Interfaces\SubcategoryRepositoryInterface;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
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

    public function getSubcategoryUsage()
{
    // Fetch the total count of gigs created for each subcategory
    $subcategoryUsage = Gig::select('subcategory_id', DB::raw('COUNT(*) AS gig_count'))
        ->groupBy('subcategory_id')
        ->orderByDesc('gig_count')
        ->limit(3)
        ->get();

    // Retrieve the subcategory details for each usage count
    $subcategoryUsageDetails = [];
    foreach ($subcategoryUsage as $usage) {
        $subcategory = Subcategory::find($usage->subcategory_id);
        if ($subcategory) {
            $subcategoryUsageDetails[] = [
                'id' => $subcategory->name,
                'label' => $subcategory->name,
                'value' => $usage->gig_count,
            ];
        }
    }

    return $subcategoryUsageDetails;
}
}
