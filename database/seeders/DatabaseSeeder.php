<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $freelancer = \App\Models\User::factory()->create([
            'name' => 'Freelancer',
            'username' => 'Freelancer',
            'address' => fake()->address(),
            'picture' => 'default.jpg',
            'email' => 'freelancer@test.com',
            'password' => bcrypt('password'),
        ]);
        $freelancer->freelancer()->create([
            'skills' => ['React js', 'Tailwind css', 'Laravel'],
            'bio' => fake()->sentence(),
        ]);

        $client = \App\Models\User::factory()->create([
            'name' => 'Client',
            'username' => 'client',
            'address' => fake()->address(),
            'picture' => 'default.jpg',
            'email' => 'client@test.com',
            'password' => bcrypt('password'),
        ]);
        $client->client()->create();

        $admin = \App\Models\User::factory()->create([
            'name' => 'admin',
            'username' => 'admin',
            'address' => fake()->address(),
            'picture' => 'default.jpg',
            'email' => 'admin@test.com',
            'password' => bcrypt('password'),
        ]);
        $admin->admin()->create();


        $this->call([
            CategorySeeder::class,
            SubcategorySeeder::class

        ]);

    }
}
