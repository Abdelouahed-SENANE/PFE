<?php


namespace App\Services;

use App\Dto\RatingDto;
use App\Repositories\Interfaces\RatingRepositoryInterface;
use App\Repositories\SubcategoryRepository;
use App\Services\Interfaces\RatingServiceInterface;
use Exception;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class RatingService implements RatingServiceInterface
{


   /**
    * @var $SubcategoryRepository
    */

   /**
    * @param SubcategoryRepository $SubcategoryRepository
    */

   public function __construct(protected RatingRepositoryInterface $repository)
   {
      $this->repository = $repository;
   }

   public function create(RatingDto $ratingDTO, $clientId)
   {
      return $this->repository->createRating($ratingDTO, $clientId);
   }
   public function getAverageRatingByFreelancerId($freelancerId)
   {
      return $this->repository->getAverageRatingByFreelancerId($freelancerId);
   }
}
