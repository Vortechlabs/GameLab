<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use App\Models\Games;
use Illuminate\Http\Request;

class GamesController extends Controller
{
    public function index(){
        $games = Games::with('consoles')->get();
        return response() -> json([
            'status' => 'success',
            'data' => $games,
        ]);
    }
}
