<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
            /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'payment_information',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
    public function orders() {
        return $this->hasMany(Order::class , 'client_id');
    }

    public function temp_order() {
        return $this->hasMany(Temp_Order::class , 'client_id');
    }
}
