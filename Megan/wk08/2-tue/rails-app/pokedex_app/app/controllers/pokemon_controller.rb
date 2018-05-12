class PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def create
    pokemon = Pokemon.new
    pokemon.nickname = params[:name]
    pokemon.species = params[:species]
    pokemon.level = params[:level]
    pokemon.save
    redirect_to "/"
  end
end
