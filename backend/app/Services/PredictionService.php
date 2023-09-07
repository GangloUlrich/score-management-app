<?php

namespace App\Services;

use App\Http\Requests\PredictionFormRequest;
use App\Models\Prediction;

class PredictionService
{

    public  static function listByUser($id){
        $predictions = Prediction::where('user_id','=',$id)->get();
        return response()->json($predictions,200);
    }

    public  static function save(PredictionFormRequest $request){
        $prediction = Prediction::create($request->all());
        return response()->json($prediction,201);
    }

}
