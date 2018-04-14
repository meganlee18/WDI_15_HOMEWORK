require "sinatra"
require "sinatra/reloader"
require "pry"

require "httparty"

get "/" do
  erb :index
end

get "/about" do
  erb :about
end

get "/movie_name" do
  result = HTTParty.get("http://www.omdbapi.com/?s=#{params[:name]}&apikey=2f6435d9")
  movie_list = result.parsed_response
  @movie_name = params[:name]

  #select all the first elements in the hash: "title"
  @movies = movie_list["Search"].map do |movie|
    movie["Title"]
  end

  erb :list
end

get "/movie_name/:movie" do
  result = HTTParty.get("http://www.omdbapi.com/?t=#{params[:movie]}&apikey=2f6435d9")
  movie = result.parsed_response

  title = params[:name]

  @title = title
  @year = movie["Year"]
  @poster = movie["Poster"]
  @plot = movie["Plot"]

  erb :movie
end
