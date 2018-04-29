require "sinatra"
require "sinatra/reloader"
require "pry"
require "pg"
require "active_record"

require_relative "db_config"
require_relative "models/movie"

require "httparty"

get "/" do
  erb :index
end

get "/about" do
  erb :about
end

post "/movie_name" do
  #First get results from omdb API

  result = HTTParty.get("http://www.omdbapi.com/?s=#{params[:name]}&apikey=2f6435d9")
  movie_list = result.parsed_response
  @movie_name = params[:name]

  #Then select the following elements in the hash and save each movie to database
  @movies = movie_list["Search"].map do |movie|
    movieDb = Movie.new
    movieDb.name = movie["Title"]
    movieDb.poster = movie["Poster"]
    movieDb.year = movie["Year"]

    #Check if record exists in database, if not, save it!
    puts "Checking #{movieDb.name} Result of where #{Movie.where({name: movieDb.name})}"
    if Movie.where({name: movieDb.name}) == []
      puts "Saving #{movieDb.name}"
      movieDb.save
    end

    movie["Title"]
  end
  erb :list
end

get "/movie_name/:movie" do
  movie = Movie.where({name: params[:movie]}).first
  @title = movie.name
  @year = movie.year
  @poster = movie.poster

  erb :movie
end
