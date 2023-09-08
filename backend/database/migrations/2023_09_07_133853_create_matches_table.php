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
        Schema::create('matches', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('home_team');
            $table->unsignedBigInteger('away_team');
            $table->integer('score_home')->nullable()->default(0);
            $table->integer('score_away')->nullable()->default(0);
            $table->string('pos_home')->nullable();
            $table->string('pos_away')->nullable();
            $table->integer('card_home')->nullable()->default(0);
            $table->integer('card_away')->nullable()->default(0);
            $table->enum('status',['finished','upcoming'])->default('upcoming');
            $table->foreign('home_team')->references('id')->on('teams');
            $table->foreign('away_team')->references('id')->on('teams');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matches');
    }
};
