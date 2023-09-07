<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matche extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $with = ['homeTeam','awayTeam','players'];

    public function homeTeam()
    {
        return $this->belongsTo(Team::class, 'home_team', 'id');
    }
    public function awayTeam()
    {
        return $this->belongsTo(Team::class, 'away_team', 'id');
    }

    public function players(){
        return $this->hasMany(MatchePlayer::class);
    }

}
