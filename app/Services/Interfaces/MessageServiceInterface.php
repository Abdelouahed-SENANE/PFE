<?php

namespace App\Services\Interfaces;

interface MessageServiceInterface {

    public function all();

    public function store(Array $payload);
}