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
        $this->belongsTo(Freelancer::class);
    }
}
