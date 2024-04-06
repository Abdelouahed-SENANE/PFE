<?php


namespace App\Services;

use App\Repositories\ClientRepository;



class ClientService {


    /**
     * @var $clientRepository
     */
    protected $clientRepository;

    /**
     * @param clientRepository $clientRepository
     */

     public function __construct(ClientRepository $clientRepository)
     {
        $this->clientRepository = $clientRepository;

     }
}