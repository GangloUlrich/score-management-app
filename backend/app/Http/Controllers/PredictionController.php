<?php

namespace App\Http\Controllers;

use App\Http\Requests\PredictionFormRequest;
use App\Services\HandleErrorService;
use App\Services\PredictionService;
use Illuminate\Http\Request;

class PredictionController extends Controller
{
    public  function listByUser($id){
        try {
            return  PredictionService::listByUser($id) ;
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function store(PredictionFormRequest $request){
        try {
            return  PredictionService::save($request);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }
}
