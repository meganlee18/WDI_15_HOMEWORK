class PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def home
  end

  def create
    pokemon = Pokemon.new
    pokemon.nickname = params[:name]
    pokemon.species = params[:species]
    pokemon.level = params[:level]
    pokemon.pokemon_number = params[:pokedex]
    pokemon.save
    redirect_to "/"
  end

  def destroy
    @pokemon = Pokemon.find(params[:id])
    @pokemon.destroy
    redirect_to "/"
  end

  def edit
  end

  def show
    @pokemon = Pokemon.all
  end

  def update
    pokemon = Pokemon.find(params[:id])
    pokemon.nickname = params[:name]
    pokemon.species = params[:species]
    pokemon.level = params[:level]
    pokemon.pokemon_number = params[:pokedex]
    pokemon.save
    redirect_to "/"
  end
end
