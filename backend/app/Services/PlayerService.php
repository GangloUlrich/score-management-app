<?php

namespace App\Services;

use App\Http\Requests\PlayerFormRequest;
use App\Models\Player;

class PlayerService
{

    public  static function list(){
        $players = Player::all();
        return response()->json($players,200);
    }

    public  static function save(PlayerFormRequest $request){
        $player = Player::create($request->all());
        return response()->json($player,201);
    }

    public  static function update(PlayerFormRequest $request, $id){
        $player = Player::find($id);
        $player->update($request->all());

        return response()->json($player,200);
    }

    public  static function show($id){
        $player = Player::find($id);
        return response()->json($player,200);
    }
    public  static function delete($id){
        $player = Player::find($id);
        $player->delete();
        return response()->json('',204);
    }


}
