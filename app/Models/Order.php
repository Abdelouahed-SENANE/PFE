<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'gig_id',
        'received_at',
        'session_id'
    ];
    public function gig() {
        return $this->belongsTo(Gig::class);
    }
    public function client() {
        return $this->belongsTo(Client::class);
    }

    public function rating() {
        return $this->hasOne(Rating::class);
    }
}
