<?php

namespace App\Http\Controllers;

use App\Http\Requests\MatcheFormRequest;
use App\Services\HandleErrorService;
use App\Services\MatcheService;
use Illuminate\Http\Request;

class MatcheController extends Controller
{

    public  function index(){
        try {
            return  MatcheService::list() ;
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function store(MatcheFormRequest $request){
        try {
            return  MatcheService::save($request);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function update(MatcheFormRequest $request, $id){
        try {
            return MatcheService::update($request,$id) ;
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function show($id) {
        try {
            return  MatcheService::show($id);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function destroy($id){
        try {
            return  MatcheService::delete($id);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

}
