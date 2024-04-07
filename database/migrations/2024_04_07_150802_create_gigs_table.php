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
        Schema::create('gigs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('excerpt');
            $table->float('price');
            $table->json('images');
            $table->json('search_tags');
            $table->integer('delivery');
            $table->enum('status' , ['pending' , 'approved' , 'declined'])->default('pending');
            $table->foreignId('freelancer_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('subcategory_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gigs');
    }
};
