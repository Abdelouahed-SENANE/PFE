<?php

namespace App\Repositories;

use App\Dto\GigDto;
use App\Models\Freelancer;
use App\Models\Gig;
use App\Models\Order;
use App\Models\User;
use App\Repositories\Interfaces\GigRepositoryInterface;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Symfony\Component\HttpFoundation\Response;

use function Laravel\Prompts\select;

class GigRepository implements GigRepositoryInterface
{

   /**
    * @var Gig
    */
   protected $gig;

   /**
    * @param gig $gig
    */

   public function __construct(Gig $gig)
   {
      $this->gig = $gig;
   }
   // ========== Implentation Interfaces =========
   public function all(): JsonResponse
   {
      $gigs = $this->gig->all();
      return response()->json([$gigs]);
   }
   public function myGigs(): JsonResponse
   {
      $user = JWTAuth::user();
      $freelancer = $user->freelancer()->first();
      $myGigs = Gig::where('freelancer_id', $freelancer->id)->get();
      $activeGig = [];
      $pendingGig = [];
      $deniedGig = [];

      foreach ($myGigs as $myGig) {

         $formattedGig = [
            'id' => $myGig->id,
            'title' => $myGig->title,
            'excerpt' => $myGig->excerpt,
            'delivery_date' => $myGig->delivery,
            'status' => $myGig->status,
         ];
         if ($myGig->status === 'approved') {
            $activeGig[] = $formattedGig;
         } else if ($myGig->status === 'pending') {
            $formattedGig['actions'] = 'actions';
            $pendingGig[] = $formattedGig;
         } else {
            $deniedGig[] = $formattedGig;
         }
      }
      $tabs = [
         [
            'id' => 1,
            'label' => 'Active',
            'tableHead' => ['ID', 'title', 'Excerpt', 'Delivery date', 'Status'],
            'rows' => $activeGig,
         ],
         [
            'id' => 2,
            'label' => 'Pending approval',
            'tableHead' => ['ID', 'title', 'Excerpt', 'Delivery date', 'Status', 'actions'],
            'rows' => $pendingGig,
         ],
         [
            'id' => 3,
            'label' => 'Denied',
            'tableHead' => ['ID', 'title', 'Excerpt', 'Delivery date', 'Status'],
            'rows' => $deniedGig,
         ],
      ];


      return response()->json([
         'myGigs' => $tabs
      ]);
   }
   public function createGig(GigDto $gigDto, Freelancer $freelancer)
   {
      $attributes = $gigDto->toArray();
      return $freelancer->gigs()->create($attributes);
   }

   public function updateGig($gigId, GigDto $gigDto): Gig
   {
      $gig = Gig::findOrFail($gigId);
      $attributes = $gigDto->toArray();
      $gig->update($attributes);
      return $gig;
   }

   public function deleteGig(Gig $gig)
   {
      return $gig->delete($gig);
   }
   public function updateStatus($gigId, $status)
   {
      $gig = $this->gig::findOrFail($gigId);
      $gig->status = $status;
      $gig->save();
      return $gig;
   }
   public function show(Gig $gig)
   {
      $foundGig = $this->gig->with('freelancer.user:id,name,picture')->findOrFail($gig->id);
      return $foundGig;
   }
   public function getActiveGigs($request)
   {
      $subcategory = $request->input('subcategory');
      $searchTerm = $request->input('search');
      $delivery_time = $request->input('delivery');
      $min_price = $request->input('minPrice');
      $max_price = $request->input('maxPrice');

      $query = Gig::query();

      $query->with(['freelancer.user:id,name,picture', 'subcategory:id,name']);

      $query->where('status', 'approved');

      if ($delivery_time) {
         $query->where('delivery', $delivery_time);
      }
      if ($searchTerm) {
         $lowercaseSearchTerm = strtolower($searchTerm);
         $query->whereRaw("LOWER(title) LIKE ?", ['%' . $lowercaseSearchTerm . '%']);
      }


      if ($min_price && $max_price) {
         $query->whereBetween('price', [$min_price, $max_price]);
      }
      if ($subcategory) {
         $query->whereHas('subcategory', function ($query) use ($subcategory) {
            $query->where('name', $subcategory);
         });
      }
      $result = $query->paginate(3);
      return $result;
   }

   public function getPendingGigs()
   {
      $pendingGigs = $this->gig->with('freelancer.user:id,name,picture')->where('status', 'pending')->get();
      return $pendingGigs;
   }

   public function getPopularGigOnWeek()
   {
      $startDate = now()->subDays(7)->startOfWeek();

      $chartData = [];

      $gigIds = Order::where('created_at', '>=', $startDate)
         ->where('payment_status', 'PAID')
         ->pluck('gig_id')
         ->unique()
         ->toArray();

      $daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

      foreach ($gigIds as $gigId) {
         $gigTitle = Gig::find($gigId)->title;

         $orderCountsByDay = array_fill_keys($daysOfWeek, 0);

         $orders = Order::where('gig_id', $gigId)
            ->where('created_at', '>=', $startDate)
            ->where('payment_status', 'PAID')
            ->get();

         foreach ($orders as $order) {
            $dayOfWeek = $order->created_at->format('D');
            if (in_array($dayOfWeek, $daysOfWeek)) {
               $orderCountsByDay[$dayOfWeek]++;
            }
         }

         $chartData[] = [
            'title' => $gigTitle,
            'data' => array_values($orderCountsByDay),
         ];
      }

      return $chartData;
   }
   public function getSalesBydDayOfWeek()
   {
      // Calculate start date (one week ago from current date)
      $startDate = Carbon::now()->subWeek();

      // Fetch sales data for each day of the week within the past week
      $salesData = Order::join('gigs', 'orders.gig_id', '=', 'gigs.id')
         ->select(
            DB::raw('EXTRACT(DOW FROM orders.created_at) AS day_of_week'), // Use EXTRACT to get day of the week
            DB::raw('SUM(gigs.price) AS total_sales')
         )
         ->where('orders.created_at', '>=', $startDate)
         ->where('orders.payment_status', 'PAID')
         ->groupBy(DB::raw('EXTRACT(DOW FROM orders.created_at)')) // Group by day of the week
         ->orderBy(DB::raw('EXTRACT(DOW FROM orders.created_at)')) // Order by day of the week
         ->get();

      // Initialize an array to store formatted sales data by day of the week
      $formattedSalesData = [
         'Mon' => 0,
         'Tue' => 0,
         'Wed' => 0,
         'Thu' => 0,
         'Fri' => 0,
         'Sat' => 0,
         'Sun' => 0,
      ];

      // Populate formatted sales data based on fetched results
      foreach ($salesData as $sale) {
         // Map the day_of_week (0-6) returned by EXTRACT to the corresponding abbreviated day name
         $dayOfWeek = intval($sale->day_of_week); // Convert day_of_week to integer
         switch ($dayOfWeek) {
            case 0:
               $formattedSalesData['Sun'] = $sale->total_sales;
               break;
            case 1:
               $formattedSalesData['Mon'] = $sale->total_sales;
               break;
            case 2:
               $formattedSalesData['Tue'] = $sale->total_sales;
               break;
            case 3:
               $formattedSalesData['Wed'] = $sale->total_sales;
               break;
            case 4:
               $formattedSalesData['Thu'] = $sale->total_sales;
               break;
            case 5:
               $formattedSalesData['Fri'] = $sale->total_sales;
               break;
            case 6:
               $formattedSalesData['Sat'] = $sale->total_sales;
               break;
         }
      }

      return $formattedSalesData;
   }



   public function countGigs()
   {
      return $this->gig->all()->count();

   }
}
