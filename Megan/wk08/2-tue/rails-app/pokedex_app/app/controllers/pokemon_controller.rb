class PokemonController < ApplicationController
  def index
  end

  def home
    @pokemon = Pokemon.all
  end

  def create
    pokemon = Pokemon.new
    pokemon.nickname = params[:name]
    pokemon.species = params[:species]
    pokemon.level = params[:level]
    pokemon.pokedex_number = params[:pokedex]
    pokemon.save
    redirect_to "/pokemon"
  end

  def destroy
    @pokemon = Pokemon.find(params[:id])
    @pokemon.destroy
    redirect_to "/pokemon"
  end

  def edit
    pokemon = Pokemon.find(params[:id])
    pokemon.nickname = params[:name]
    pokemon.species = params[:species]
    pokemon.level = params[:level]
    pokemon.pokedex_number = params[:pokedex]
    pokemon.save
    redirect_to "/"
  end

  def show
    @pokemon = Pokemon.all
  end
end
