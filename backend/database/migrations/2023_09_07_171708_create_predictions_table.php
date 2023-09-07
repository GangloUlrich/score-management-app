<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('predictions', function (Blueprint $table) {
            $table->id();
            $table->integer('score_home')->nullable();
            $table->integer('score_away')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('matche_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('matche_id')->references('id')->on('matches');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('predictions');
    }
};
