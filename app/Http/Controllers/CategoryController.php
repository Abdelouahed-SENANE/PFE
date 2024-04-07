<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Response ;

class CategoryController extends Controller
{
    //
    public function index() {
        $categories = Category::all();
        return response()->json(['categories' => $categories], Response::HTTP_OK);
    }
}
