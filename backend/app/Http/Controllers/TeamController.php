<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeamFormRequest;
use App\Services\AuthService;
use App\Services\HandleErrorService;
use App\Services\TeamService;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public  function index(){
        try {
            return  TeamService::list() ;
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function store(TeamFormRequest $request){
        try {
            return  TeamService::save($request);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function update(TeamFormRequest $request, $id){
        try {
            return TeamService::update($request,$id) ;
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function show($id) {
        try {
            return  TeamService::show($id);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }

    public  function destroy($id){
        try {
            return  TeamService::delete($id);
        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }




}
