<?php

namespace App\Services;

use App\Http\Requests\LoginFormRequest;
use App\Http\Requests\RegisterFormRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthService
{

    public static function register(RegisterFormRequest $request){

           $user =  User::create($request->all());
           return response()->json($user,201);

    }

    public static function login(LoginFormRequest $request){
        if (!auth()->attempt($request->all())) {
           return response()->json('invalid credentials',422);
        }

        $user =  auth()->user();
        $token = $user->createToken('user token')->plainTextToken;

        return response()->json( [
            'user' => $user,
            'token' => $token,
        ],200);
    }

    public static function logout(Request $request){
        $request->user()->tokens()->delete();
        return response()->json([],204);
    }
}
