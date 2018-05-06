Rails.application.routes.draw do
  get "/", to: "games#index"
  get "/magic-8-ball", to: "games#magic_ball"
  get "/secret-number", to: "games#secret_number"
  get "/rock-paper-scissors", to: "games#rock_paper_scissors"
  get "/games/rock_paper_scissors/throw", to: "games#rock_paper_scissors_play"
end
