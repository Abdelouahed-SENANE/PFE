<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public function gig() {
        return $this->belongsTo(Gig::class);
    }
    public function client() {
        return $this->belongsTo(Client::class);
    }

}
