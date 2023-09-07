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
    Route::get('teams', [\App\Http\Requests\TeamFormRequest::class,'index']);
    Route::post('teams', [\App\Http\Requests\TeamFormRequest::class,'store']);
    Route::post('teams/{id}', [\App\Http\Requests\TeamFormRequest::class,'update']);
    Route::get('teams/{id}', [\App\Http\Requests\TeamFormRequest::class,'show']);
    Route::delete('teams/{id}', [\App\Http\Requests\TeamFormRequest::class,'destroy']);



});

