<?php

namespace App\Services;

use App\Http\Requests\MatcheFormRequest;
use App\Models\Matche;

class MatcheService
{

    public  static function list(){
        $matches = Matche::all();
        return response()->json($matches,200);
    }

    public  static function save(MatcheFormRequest $request){
        $matche = Matche::create($request->all());
        return response()->json($matche,201);
    }

    public  static function update(MatcheFormRequest $request, $id){
        $matche = Matche::find($id);
        $matche->update($request->all());

        return response()->json($matche,200);
    }

    public  static function show($id){
        $matche = Matche::find($id);
        return response()->json($matche,200);
    }
    public  static function delete($id){
        $matche = Matche::find($id);
        $matche->delete();
        return response()->json('',204);
    }

}
