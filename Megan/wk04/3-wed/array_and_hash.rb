# Array and Hash access

# Question A. Given the following data structure:

a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
a[1]

# How would you add your name to the array?
a.push("Megan")

# B. Given the following data structure:
h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2,
}

# How would you return the string "One"?
h[1]

# How would you return the string "Two"?
h[:two]

# How would you return the number 2?
h["two"]

# How would you add {3 => "Three"} to the hash?
h.merge({3 => "Three"})

# How would you add {:four => 4} to the hash?
h2 = h.merge({3 => "Three"})
h2.merge({:four => 4})

# Question C. Given the following data structure:
is = {
  true => "It's true!",
  false => "It's false",
}

# What is the return value of is[2 + 2 == 4]?
# Answer: "It's true!"

# What is the return value of is["Erik" == "Jonathan"]?
# Answer: "It's false"

# What is the return value of is[9 > 10]?
# Answer: "It's false"

# What is the return value of is[0]?
# Answer: nil

# What is the return value of is["Erik"]?
# Answer: nil

# Question D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)

# How would you add yourself to the users hash?
hash = {
  "Megan" => {
    :twitter => "meganlee",
    :favorite_numbers => [1, 2, 3],
  },
}

users.merge(hash)

# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].sort.first

# How would you return an array of Anil's favorite numbers that are also even?

even_array = []
anil_favorite_numbers = users["Anil"][:favorite_numbers]
anil_favorite_numbers.each do |x|
  if x % 2 == 0
    even_array.push(x)
  end
end
even_array

# How would you return an array of the favorite numbers common to all users?
erik = users["Erik"][:favorite_numbers]
jonathan = users["Jonathan"][:favorite_numbers]
anil = users["Anil"][:favorite_numbers]

all = erik.concat(jonathan).concat(anil)


# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

all.sort.uniq