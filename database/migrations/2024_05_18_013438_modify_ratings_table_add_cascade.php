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
        Schema::table('ratings', function (Blueprint $table) {
            // Drop existing foreign key constraints
            $table->dropForeign(['client_id']);
            $table->dropForeign(['order_id']);

            // Add foreign key constraints with onDelete cascade
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::table('ratings', function (Blueprint $table) {
            // Drop existing foreign key constraints
            $table->dropForeign(['client_id']);
            $table->dropForeign(['order_id']);

            // Add foreign key constraints with onDelete cascade
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
        });
    }
};
