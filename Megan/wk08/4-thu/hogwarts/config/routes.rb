Hogwarts::Application.routes.draw do
  #root "house#index"
  get "/", to: "house#index"

  resource :house, :only => [:index, :show]
  resources :students, :only => [:index, :show]
end
