Rails.application.routes.draw do
  resources :quotes
  resources :users

  get "/", to: "quotes#index"
  get "/login", to: "session#new"
  post "/session", to: "session#create"
  #create session, store user id, session_controller create method probably redirect
  delete "/session", to: "session#destroy"
  get "/about", to: "pages#about_us"
  #pages_controller about us method pages/about_us.html.erb
end
