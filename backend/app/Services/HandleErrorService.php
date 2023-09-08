<?php

namespace App\Services;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class HandleErrorService
{
    const AN_INTERNAL_ERROR_OCCURRED = "An internal error occurred";
    public static function errorResponse(Throwable $e){
        Log::error($e->getMessage(), $e->getTrace());
        if($e instanceof ModelNotFoundException){
            return response()
                ->json([
                    "message" => "Resource not found",
                ], Response::HTTP_NOT_FOUND);
        }
        return response()
            ->json([
                "message" => self::AN_INTERNAL_ERROR_OCCURRED,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }


}
