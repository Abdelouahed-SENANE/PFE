<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            // Drop existing foreign key constraints
            $table->dropForeign(['client_id']);
            $table->dropForeign(['gig_id']);

            // Add foreign key constraints with onDelete cascade
            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            $table->foreign('gig_id')->references('id')->on('gigs')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            // Drop the modified foreign key constraints
            $table->dropForeign(['client_id']);
            $table->dropForeign(['gig_id']);

            // Restore original foreign key constraints
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('gig_id')->references('id')->on('gigs');
        });
    }
};
