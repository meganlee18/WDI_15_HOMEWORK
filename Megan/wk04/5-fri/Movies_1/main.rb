require "sinatra"
require "sinatra/reloader"
require "pry"

require "httparty"

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/movie' do
  result = HTTParty.get("http://www.omdbapi.com/?t=#{params[:movie_name]}&apikey=2f6435d9")
  movie = result.parsed_response
  
  title = params[:movie_name]

  @title = title
  @year = movie["Year"] 
  @poster = movie["Poster"]
  @plot = movie["Plot"]

  erb :movie
end
