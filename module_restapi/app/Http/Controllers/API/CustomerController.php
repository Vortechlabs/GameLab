<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index() {
        $customer = customer::all();
        return response() -> json([
            'status' => 'success',
            'data' =>  $customer,
        ]);
    }
}
