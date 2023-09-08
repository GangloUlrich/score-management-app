<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;

class Team extends Model
{
    use HasFactory,Notifiable;

    protected $guarded = ['id'];

    public function players(){
        return $this->hasMany(Player::class);
    }
}
