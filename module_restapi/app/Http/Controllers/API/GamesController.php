<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use App\Models\games;
use Illuminate\Http\Request;

class GamesController extends Controller
{
    public function index(){
        $games = games::all();
        return response() -> json([
            'status' => 'success',
            'data' => $games,
        ]);
    }
}
