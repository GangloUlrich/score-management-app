<?php

namespace App\Services;

use App\Http\Requests\TeamFormRequest;
use App\Models\Team;

class TeamService
{
        public  static function list(){
            $teams = Team::all();
            return response()->json($teams,200);
        }

    public  static function save(TeamFormRequest $request){
        $team = Team::create($request->all());
        return response()->json($team,201);
    }

    public  static function update(TeamFormRequest $request, $id){
        $team = Team::find($id);
        $team->update($request->all());

        return response()->json($team,200);
    }

    public  static function show($id){
        $team = Team::find($id);
        return response()->json($team,200);
    }
    public  static function delete($id){
        $team = Team::find($id);
        $team->delete();
        return response()->json('',204);
    }




}
