Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  namespace :api do
    # Неймспейс для маршрутов, приходящих от Системы управления
    namespace :hardware do

    end

    # Неймспейс для пользователя
    namespace :user do
      resources :green_houses
    end

    # Управление сессией
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
    get 'initialize', to: 'users#initialize_client'
  end
end
