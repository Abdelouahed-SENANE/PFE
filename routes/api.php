<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\GigController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\StripePaymentController;
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
Route::delete('/users/{id}', [UserController::class, 'destroy']);

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
    Route::post('subcategories', 'store');
    Route::put('subcategory/{id}', 'update');
    Route::delete('/subcategories/{id}', 'destroy');
    Route::get('/subcategory/{id}', 'show');
});

//  Test Route Gig
Route::post('/gigs/create', [GigController::class, 'store']);
Route::post('/gigs/update/{id}', [GigController::class, 'update']);
Route::delete('/gigs/delete/{id}', [GigController::class, 'destroy']);
Route::patch('/gigs/update-status/{id}', [GigController::class, 'updateStatus']);
Route::get('/gigs', [GigController::class, 'index']);
Route::get('/my-gigs', [GigController::class, 'myGigs']);
Route::get('/gigs/{gig}', [GigController::class, 'getGigOrderedByClient']);
Route::get('/active-gigs', [GigController::class, 'activeGigs']);
Route::get('/pending-gigs', [GigController::class, 'pendingGigs']);
Route::get('gigs/gig-reviews/{id}', [GigController::class, 'getAllReviewsByGigId']);


// Statistics Admin
Route::get('/popular-gigs', [GigController::class, 'getPopularGigsOnWeek']);
Route::get('/sales-gigs', [GigController::class, 'getSalesByDayOfWeek']);
Route::get('/subcategories-usage', [SubcategoryController::class, 'getSubcategoryUsage']);
Route::get('/count-users', [UserController::class, 'countUsers']);
Route::get('/count-orders', [OrderController::class, 'countOrders']);
Route::get('/count-gigs', [GigController::class, 'countGigs']);
Route::get('/recent-transactions', [OrderController::class, 'recentTransactions']);


// Profle Controller 
Route::patch('/update-info', [ProfileController::class, 'updateInfos']);
Route::post('/update-picture', [ProfileController::class, 'updatePicture']);
Route::patch('/update-password', [ProfileController::class, 'updatePassword']);

// Profle Categories Router 
Route::get('/categories', [CategoryController::class, 'index']);

// Route orders

Route::get('orders' , [OrderController::class , 'index']);
Route::post('orders/create' , [OrderController::class , 'store']);
Route::patch('orders/update-status/{id}' , [OrderController::class , 'updateStatusOrder']);
Route::get('orders/can-purchase/{id}' , [OrderController::class , 'canPurchase']);
Route::get('orders/can-rate/{id}' , [OrderController::class , 'canPurchase']);
Route::get('orders/check-order-rating/{id}' , [OrderController::class , 'checkClientHasOrderAndRating']);
Route::get('/my-orders', [OrderController::class, 'myOrders']);


// Stripe API 

Route::post('/create-checkout-session' , [PaymentController::class , 'checkout']);
Route::put('/payment-success' , [PaymentController::class , 'handlePaymentSuccess']);


// Route Rating 
Route::post('/ratings',[RatingController::class , 'store']);
Route::get('/average-rating/{id}',[RatingController::class , 'getAverageRatingByFreelancerId']);