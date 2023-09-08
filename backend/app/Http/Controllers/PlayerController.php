<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlayerFormRequest;
use App\Services\HandleErrorService;
use App\Services\PlayerService;
use Illuminate\Http\Request;

class PlayerController extends Controller
{

    public  function index(){
        try {
            return  PlayerService::list() ;
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function store(PlayerFormRequest $request){
        try {
            return  PlayerService::save($request);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function update(PlayerFormRequest $request, $id){
        try {
            return PlayerService::update($request,$id) ;
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function show($id) {
        try {
            return  PlayerService::show($id);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function destroy($id){
        try {
            return  PlayerService::delete($id);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }


}
