<?php

namespace App\Http\Controllers;

use App\Models\Matche;
use App\Models\Team;
use App\Services\HandleErrorService;
use App\Services\MatcheService;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class ExportController extends Controller
{

    public function exportMatches()
    {
        try {
            $matches = Matche::all();
            $pdf = PDF::loadView('pdf-matches', compact('matches'));
            return $pdf->download('matches.pdf');

        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }


    public function exportLeaderBoard(){
        try {
            $teams = Team::orderBy('points','desc')->get();
            $pdf = PDF::loadView('pdf-leaderboard', compact('teams'));
            return $pdf->download('leaderboard.pdf');

        } catch (\Throwable $e) {
            return HandleErrorService::errorResponse($e);
        }
    }
}
