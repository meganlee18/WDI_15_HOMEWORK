Rails.application.routes.draw do
  root "pokemon#index" #similar to get "/", to:"pokemon#index"
  post "/create", to: "pokemon#create"

  #resources vs resource - create one less route (omit index route)
  resources :pokemon #create the 7 routes normally
end
