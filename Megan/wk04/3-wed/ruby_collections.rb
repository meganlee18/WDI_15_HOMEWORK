# Question One
    # Starting with the following array...
    # Access the second value in planeteers.

    planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

    # Your answer here
    planeteers[1]

# Question Two
    # Add "Heart" to the end of planeteers.
    
    # Your answer here
    planeteers.push("Heart")

# Question Three
    # Remove "Captain Planet" from the array (without using a method).

    # Your answer here
    planeteers[-3]


# Question Four
    # Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] 
    # and save the result in a variable called heroes.

    # Your answer here
    planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
    rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

    heroes = rangers.concat(planeteers)

# Question Five
    # Alphabetize the contents of heroes using a method. The Ruby documentation might help.

    # Your answer here
    heroes.sort
    

# Question Six
    # Randomize the contents of heroes using a method. The Ruby documentation might help.

    # Your answer here
    heroes.sort_by {rand}

# Bonus
# Question Seven
    # Select a random element from heroes using a method. The Ruby documentation might help.
   
    # Your answer here
    heroes.sample #or
    heroes[rand]

# Question Eight
    # Select all elements in heroes that begin with "B" using a method. The Ruby documentation might help.

    # Your answer here
   heroes.select do |v| v.start_with?("B")
   end


#Hashes

#Initialize a hash called ninja_turtle with the properties name, weapon and radical. 
#They should have values of "Michelangelo", "Nunchuks" and true respectively.

# Your answer here

ninja_turtle = {
        :properties => "Michelangelo",
        :weapon => "Nunchuks",
        :radical => true,
    }

#Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.

# Your answer here:
ninja_turtle.merge({:key_age => 12})

# Remove the radical key-value pair from ninja_turtle.

# Your answer here:
ninja_turtle.delete(:radical)

# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings 
# (e.g., ["cheese", "pepperoni", "peppers"]).

# Your answer here:
ninja_turtle.merge(:pizza_toppings => ["cheese", "pepperoni", "peppers"])


# Access the first element of pizza_toppings.

# Your answer here:
new_ninja_turtle = ninja_turtle.merge(:pizza_toppings => ["cheese", "pepperoni", "peppers"])
new_ninja_turtle[:pizza_toppings][0]

# Produce an array containing all of ninja_turtle's keys using a method. 
# The Ruby documentation might help.

# Your answer here:
ninja_turtle.keys