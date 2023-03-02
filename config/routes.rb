Rails.application.routes.draw do
  resources :books
  root "home#index"
end
