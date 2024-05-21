<?php

namespace App\Providers;

use App\Models\User;
use App\Repositories\ConversationRepository;
use App\Repositories\GigRepository;
use App\Repositories\Interfaces\ConversationRepositoryInterface;
use App\Repositories\Interfaces\GigRepositoryInterface;
use App\Repositories\Interfaces\MessageRepositoryInterface;
use App\Repositories\Interfaces\OrderRepositoryInterface;
use App\Repositories\Interfaces\RatingRepositoryInterface;
use App\Repositories\Interfaces\UserRepositoryInterface;
use App\Repositories\UserRepository;
use App\Repositories\SubcategoryRepository;
use App\Repositories\Interfaces\SubcategoryRepositoryInterface;
use App\Repositories\MessageRepository;
use App\Repositories\OrderRepository;
use App\Repositories\RatingRepository;
use App\Services\ConversationService;
use App\Services\GigService;
use App\Services\Interfaces\ConversationServiceInterface;
use App\Services\Interfaces\GigServiceInterface;
use App\Services\Interfaces\MessageServiceInterface;
use App\Services\Interfaces\OrderServiceInterface;
use App\Services\Interfaces\RatingServiceInterface;
use App\Services\MessageService;
use App\Services\OrderService;
use App\Services\RatingService;
use App\Services\UserService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(SubcategoryRepositoryInterface::class, SubcategoryRepository::class);
        $this->app->bind(GigServiceInterface::class, GigService::class);
        $this->app->bind(GigRepositoryInterface::class, GigRepository::class);
        $this->app->bind(OrderRepositoryInterface::class, OrderRepository::class);
        $this->app->bind(OrderServiceInterface::class, OrderService::class);
        $this->app->bind(RatingRepositoryInterface::class, RatingRepository::class);
        $this->app->bind(RatingServiceInterface::class, RatingService::class);
        $this->app->bind(RatingServiceInterface::class, RatingService::class);
        $this->app->bind(ConversationRepositoryInterface::class, ConversationRepository::class);
        $this->app->bind(ConversationServiceInterface::class, ConversationService::class);
        $this->app->bind(MessageRepositoryInterface::class, MessageRepository::class);
        $this->app->bind(MessageServiceInterface::class, MessageService::class);
        $this->app->bind(UserService::class, function ($app) {
            return new UserService($app->make(UserRepositoryInterface::class));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
