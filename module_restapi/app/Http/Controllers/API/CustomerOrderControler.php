<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\customer_orders;
use Illuminate\Http\Request;

class CustomerOrderControler extends Controller
{
    public function index() {
        $customer_order = customer_orders::all();
        return response() -> json([
            'status' => 'success',
            'data' => $customer_order,
        ]);
    }
}
