<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\product;
use Illuminate\Http\Request;

class ProductControler extends Controller
{
    public function index() {
        $product = product::all(); 
        return response() -> json ([
            'status' => 'success',
            'data' => $product,
        ]);
    }
}
