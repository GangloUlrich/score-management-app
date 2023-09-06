<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginFormRequest;
use App\Http\Requests\RegisterFormRequest;
use App\Services\AuthService;
use App\Services\HandleErrorService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegisterFormRequest $request){
        try {
            return  AuthService::register($request);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public function login(LoginFormRequest $request){
        try {
            return  AuthService::login($request);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public function logout(Request $request){
        try {
            return  AuthService::logout($request);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }
}
