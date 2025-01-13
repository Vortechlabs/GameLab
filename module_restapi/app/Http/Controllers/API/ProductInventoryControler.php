<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\product_inventory;
use Illuminate\Http\Request;

class ProductInventoryControler extends Controller
{
    public function index(){
        $product_inventory = product_inventory::all();
        return response() -> json([
            'status' => 'success',
            'data' => $product_inventory,
        ]);
    }
}
