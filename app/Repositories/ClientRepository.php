<?php

namespace App\Repositories;

use App\Models\Client;


class ClientRepository {

    /**
     * @var Client
     */
    protected $client; 

    /**
     * @param Client $post
     */

     public function __construct(client $client)
     {
        $this->client = $client;
     }
}