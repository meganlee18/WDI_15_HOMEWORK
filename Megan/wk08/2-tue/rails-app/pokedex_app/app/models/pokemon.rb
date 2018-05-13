class Pokemon < ApplicationRecord
  validates :species, :nickname, :level, :pokedex_number, length: {minimum: 1}, allow_blank: false
end
