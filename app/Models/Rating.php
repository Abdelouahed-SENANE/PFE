<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',
        'value',
        'comment',
        'client_id'
    ];
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    public function client(){
        return $this->belongsTo(Client::class);
    }
}
