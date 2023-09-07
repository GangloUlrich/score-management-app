<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json($request->user(),200);
});


Route::post('register',[\App\Http\Controllers\AuthController::class,'register']);

Route::post('login',[\App\Http\Controllers\AuthController::class,'login']);
Route::post('logout',[\App\Http\Controllers\AuthController::class,'logout'])->middleware('auth:sanctum');


Route::middleware('auth:sanctum')->group(function (){

    //Teams
    Route::get('teams', [\App\Http\Controllers\TeamController::class,'index']);
    Route::post('teams', [\App\Http\Controllers\TeamController::class,'store']);
    Route::post('teams/{id}', [\App\Http\Controllers\TeamController::class,'update']);
    Route::get('teams/{id}', [\App\Http\Controllers\TeamController::class,'show']);
    Route::delete('teams/{id}', [\App\Http\Controllers\TeamController::class,'destroy']);

    //Players
    Route::get('players', [\App\Http\Controllers\PlayerController::class,'index']);
    Route::post('players', [\App\Http\Controllers\PlayerController::class,'store']);
    Route::post('players/{id}', [\App\Http\Controllers\PlayerController::class,'update']);
    Route::get('players/{id}', [\App\Http\Controllers\PlayerController::class,'show']);
    Route::delete('players/{id}', [\App\Http\Controllers\PlayerController::class,'destroy']);

    //Matches
    Route::get('matches', [\App\Http\Controllers\MatcheController::class,'index']);
    Route::post('matches', [\App\Http\Controllers\MatcheController::class,'store']);
    Route::post('matches/{id}', [\App\Http\Controllers\MatcheController::class,'update']);
    Route::get('matches/{id}', [\App\Http\Controllers\MatcheController::class,'show']);
    Route::delete('matches/{id}', [\App\Http\Controllers\MatcheController::class,'destroy']);


    //Predictions
    Route::get('predictions/{$id}', [\App\Http\Controllers\MatcheController::class,'listByUser']);
    Route::post('predictions', [\App\Http\Controllers\MatcheController::class,'save']);






});

