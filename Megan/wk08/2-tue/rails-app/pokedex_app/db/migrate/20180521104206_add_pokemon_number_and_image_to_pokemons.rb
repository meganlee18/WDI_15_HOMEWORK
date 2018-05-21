class AddPokemonNumberAndImageToPokemons < ActiveRecord::Migration[5.2]
  def change
    add_column :pokemons, :pokemon_number, :integer
    add_column :pokemons, :image, :string
  end
end
