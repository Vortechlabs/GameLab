<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Consoles;
use Illuminate\Http\Request;

class ConsoleControler extends Controller
{
    public function index(){
        $consoles = Consoles::with('consoles')->get();
        return response() -> json([
            'status' => 'success',
            'data' => $consoles,
        ]);
    }
}
