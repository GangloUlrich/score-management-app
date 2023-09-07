<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prediction extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $with = ['user','matche'];


    public function  user(){
        $this->belongsTo(User::class);
    }

    public function matche(){
        $this->belongsTo(Matche::class);
    }
}
