#Generate a random number from 1 to 10

secret = (rand() * 10).to_i

puts secret

print ('Please guess a number: ')

#asking for input
guess = gets.chomp.to_i 

#loop
while guess != secret
    print 'wrong guess, guess again!'
    #holding on to the prompt/input
    guess = gets.chomp.to_i 
end

puts 'Well done, you are right!'