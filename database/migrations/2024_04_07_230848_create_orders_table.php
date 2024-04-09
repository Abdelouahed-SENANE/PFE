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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained();
            $table->foreignId('gig_id')->constrained();
            $table->timestamp('received_at')->nullable(); 
            $table->enum('payment_status', ['PENDING' , 'PAID' , 'REFUNDED'])->default('PENDING');
            $table->enum('status', ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'])->default('PENDING');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
