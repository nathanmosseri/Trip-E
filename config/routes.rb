Rails.application.routes.draw do
  resources :activities
  resources :users
  resources :groups
  resources :memberships
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/login", to: "users#login"
  get "/profile", to: "users#profile"
  post "/register", to: "users#create"
end
