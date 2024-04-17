<?php

namespace App\Repositories;

use App\Models\Temp_Order;


class TempOrderRepository {

    /**
     * @var Admin
     */
    protected $temp_order; 

    /**
     * @param Admin $admin
     */

     public function __construct(Temp_Order $temp_order)
     {
        $this->temp_order = $temp_order;
     }
}