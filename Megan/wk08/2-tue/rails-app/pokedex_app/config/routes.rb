Rails.application.routes.draw do
  root "pokemon#index" #similar to get "/", to:"pokemon#index"
  get "/pokemon/", to: "pokemon#home"
  post "/pokemon/create", to: "pokemon#create"
  delete "/pokemon/:id", to: "pokemon#destroy"
  get "/pokemon/:id/edit", to: "pokemon#show"
  post "/pokemon/:id/edit", to: "pokemon#edit"

  #resources vs resource - create one less route (omit index route)
  resources :pokemon #create the 7 routes normally
end
