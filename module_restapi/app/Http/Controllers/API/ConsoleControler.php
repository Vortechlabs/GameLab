<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\consoles;
use Illuminate\Http\Request;

class ConsoleControler extends Controller
{
    public function index(){
        $consoles = consoles::all();
        return response() -> json([
            'status' => 'success',
            'data' => $consoles,
        ]);
    }
}
