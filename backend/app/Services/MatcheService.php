<?php

namespace App\Services;

use App\Http\Requests\MatcheFormRequest;
use App\Models\Matche;
use App\Models\Team;
use App\Models\User;
use App\Notifications\LeaderBoardNotification;
use Illuminate\Support\Facades\Notification;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Firestore;


class MatcheService
{

    public static function list()
    {
        $matches = Matche::all();
        return response()->json($matches, 200);
    }

    public static function save(MatcheFormRequest $request)
    {
        $matche = Matche::create($request->all());
        return response()->json($matche, 201);
    }

    public static function update(MatcheFormRequest $request, $id)
    {
        $matche = Matche::find($id);
        $matche->update(array_merge($request->all(), ['status' => 'finished']));

        if ($request->score_home > $request->score_away) {
            self::updateWinner($request->home_team);
            self::updateLost($request->away_team);
        }

        if ($request->score_home < $request->score_away) {
            self::updateWinner($request->away_team);
            self::updateLost($request->home_team);
        }

        if ($request->score_home == $request->score_away) {
            self::updateDraw($request->away_team);
            self::updateDraw($request->home_team);
        }

        return response()->json($matche, 200);
    }

    public static function updateWinner($teamId)
    {
        $team = Team::find($teamId);
        $team->update([
            'matches' => ($team->matches + 1),
            'win' => ($team->win + 1),
            'points' => ($team->points + 3),
        ]);


    }

    public static function updateLost($teamId)
    {
        $team = Team::find($teamId);
        $team->update([
            'matches' => ($team->matches + 1),
            'lost' => ($team->lost + 1),
        ]);
    }

    public static function updateDraw($teamId)
    {
        $team = Team::find($teamId);
        $team->update([
            'matches' => ($team->matches + 1),
            'draw' => ($team->matches + 1),
            'points' => ($team->matches + 1)
        ]);
    }

    public static function show($id)
    {
        $matche = Matche::find($id);
        return response()->json($matche, 200);
    }

    public static function delete($id)
    {
        $matche = Matche::find($id);
        $matche->delete();
        return response()->json('', 204);
    }

    public static function updateOnFirebase($id)
    {
        $firebase = (new Factory())->withServiceAccount(base_path(env('GOOGLE_APPLICATION_CREDENTIALS')))->withDatabaseUri(env("FIREBASE_DATABASE_URL"));
        $data = Team::find($id);
        $collection = $firebase->database()->collection('teams');
        $document = $collection->document($id);
        $document->set($data);
    }
}
