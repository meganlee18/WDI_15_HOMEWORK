=begin
Create a Monkey class in monkey.rb, which has the following attributes:

name - a string, which should be determined by some input
species - a string, which should be determined by some input
foods_eaten - an array, which should be initialized as an empty array
And the following methods:

eat(food) - adds a food (a string) to the list of foods eaten
introduce - introduces self, with name, species, and what it's eaten
=end

#Monkey = {
#    name: '',
#    species: '',
#    foods_eaten: []
#}

class Monkey
  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  #puts adam = Monkey.new ("Adam", "Spider Monkey")

  def eat(food)
    @foods_eaten.push(food)
  end

  #adam.eat('fruit salad')
  #adam.eat('banana milkshake')

  def introduce
    puts "Hi my name is #{@name}. I am a #{@species}. I had #{@foods_eaten.join (" and ")} for brunch"
  end
end
