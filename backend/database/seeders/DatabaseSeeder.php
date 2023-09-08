<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Matche;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // Set Administrator
        User::create([
            'name' => 'Administrator',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('Epitech2023'),
            'role' => 'admin'
        ]);


        // Create Teams

        Team::create([
            'name' => 'ALPHA',
            'coach' => 'Pep GUARDIOLA',
            'win' => 0,
            'lost' => 0,
            'draw' => 0,
            'points' => 0
        ]);

        Team::create([
            'name' => 'BETA',
            'coach' => 'Massimiliano ALLEGRI',
            'win' => 0,
            'lost' => 0,
            'draw' => 0,
            'points' => 0
        ]);

        Team::create([
            'name' => 'GAMMA',
            'coach' => 'Thomas TUCHEL',
            'win' => 0,
            'lost' => 0,
            'draw' => 0,
            'points' => 0
        ]);

        Team::create([
            'name' => 'OMEGA',
            'coach' => 'Luis ENRIQUE',
            'win' => 0,
            'lost' => 0,
            'draw' => 0,
            'points' => 0
        ]);

        // get Team Id

        $teamIds = Team::pluck('id')->toArray();

        // Matches combinaisons generations

        $indexHome = 0;
        $indexAway = $indexHome + 1;


        for ($indexHome = 0; $indexHome < count($teamIds); $indexHome++) {
            for ($indexAway = $indexHome + 1; $indexAway < count($teamIds); $indexAway++) {

                Matche::create([
                    'home_team' => $teamIds[$indexHome],
                    'away_team' => $teamIds[$indexAway],
                    'score_home' => 0,
                    'score_away' => 0
                ]);

            }
        }
    }
}
