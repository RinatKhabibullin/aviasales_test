Rails.application.routes.draw do
  root :to => "web/mains#show"

  namespace :web do
    resource :main, only: :show
  end
  namespace :api do
    namespace :v1 do
      resources :users, only: [:show, :create]
      resources :affiliate_programs, only: [:index]
      resources :subscriptions, only: [:index, :create]
    end
  end
end
