<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\GigController;
use App\Http\Controllers\SubcategoryController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/users', [UserController::class, 'index']);

// ***** Autentication Routes *****
Route::controller(AuthController::class)->group(function () {
    // Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('user', 'getUser');
    // });

    Route::post('login', 'login');
    Route::post('register', 'register');
});

Route::controller(CategoryController::class)->group(function () {
    Route::get('categories', 'index');
});
Route::controller(SubcategoryController::class)->group(function () {
    Route::get('subcategories', 'index');
    Route::post('categories/{category}/subcategory', 'store');
    Route::delete('/subcategories/{subcategory}', 'destroy');
});

//  Test Route Gig
Route::post('/gigs/create', [GigController::class, 'store']);
Route::post('/gigs/update/{id}', [GigController::class, 'update']);
Route::delete('/gigs/delete/{id}', [GigController::class, 'destroy']);
Route::patch('/gigs/update-status/{id}', [GigController::class, 'updateStatus']);
Route::get('/gigs', [GigController::class, 'index']);
Route::get('/my-gigs', [GigController::class, 'myGigs']);
Route::get('/gigs/{gig}', [GigController::class, 'show']);
Route::get('/gigs/active', [GigController::class, 'activeGigs']);


// Profle Controller 
Route::patch('/update-info', [ProfileController::class, 'updateInfos']);
Route::post('/update-picture', [ProfileController::class, 'updatePicture']);
Route::patch('/update-password', [ProfileController::class, 'updatePassword']);

    // Profle Categories Router 
    Route::get('/categories', [CategoryController::class, 'index']);

