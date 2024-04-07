<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $categories = [
            ['name' => 'Graphics & Design'],
            ['name' => 'Digital Marketing'],
            ['name' => 'Writing & Translation'],
            ['name' => 'Video & Animation'],
            ['name' => 'Music & Audio'],
            ['name' => 'Programming & Tech'],
            ['name' => 'Business'],
            ['name' => 'Lifestyle'],
            ['name' => 'Photography'],
            ['name' => 'Data Entry'],
        ];

        foreach ($categories as $payload) {
            
            Category::create(['name' => $payload['name']]);
        }
    }
}
