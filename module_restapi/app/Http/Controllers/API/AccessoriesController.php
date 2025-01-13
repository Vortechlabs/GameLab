<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\accessories;
use Illuminate\Http\Request;

class AccessoriesController extends Controller
{
    public function index(){
        $accessories = accessories::all();
        return response() -> json([
            'status' => 'success',
            'data' => $accessories,
        ]);
    }
}
