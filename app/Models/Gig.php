<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gig extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'excerpt',
        'description',
        'price',
        'images',
        'search_tags',
        'delivery',
        'subcategory_id'
    ];
    protected $casts = [
        'images' => 'json',
        'search_tags' => 'json'
    ];
    public function freelancer() {
        return $this->belongsTo(Freelancer::class);
    }
    public function subcategory() {
        return $this->belongsTo(Subcategory::class);
    }
    public function orders() {
        return $this->hasMany(Order::class , 'gig_id');
    }
}
