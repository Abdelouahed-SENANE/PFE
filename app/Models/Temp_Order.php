<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temp_Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'client_id',
        'gig_id'
    ];
    
    public function client() {
        return $this->belongsTo(Client::class);
    }
    public function gig() {
        return $this->belongsTo(Gig::class);
    }
}
