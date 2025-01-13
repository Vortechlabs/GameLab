<?php

use App\Http\Controllers\API\AccessoriesController;
use App\Http\Controllers\API\ConsoleControler;
use App\Http\Controllers\API\CustomerController;
use App\Http\Controllers\API\CustomerOrderControler;
use App\Http\Controllers\APi\GamesController;
use App\Http\Controllers\API\ProductControler;
use App\Http\Controllers\API\ProductInventoryControler;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user', [UserController::class, 'index']);
Route::get('/games', [GamesController::class, 'index']);
Route::get('/consoles', [ConsoleControler::class, 'index']);
Route::get('/products', [ProductControler::class, 'index']);
Route::get('/customers', [CustomerController::class, 'index']);
Route::get('/customer-orders', [CustomerOrderControler::class, 'index']);
Route::get('/product-inventory', [ProductInventoryControler::class, 'index']);
Route::get('/accessories', [AccessoriesController::class, 'index']);