class Pokemon < ApplicationRecord
  validates :species, :nickname, :level, :pokemon_number, :image, length: {minimum: 1}, allow_blank: false
end
