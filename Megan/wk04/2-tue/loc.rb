# Write a program loc.rb to count and puts the number of lines of code in a file
#   eg. say you have a file data.txt with the following contents
    # cat
    # dog
    # rabbit


    filename = "data.txt"

  
        print ('Please enter file name: ')
            #holding on to the prompt/input
            file = gets.chomp.to_i 
            if file == filename
                IO.readline(filename)
        end

# when I run the program, it should prompt for a filename
    # $ ruby loc.rb
    # $ Enter filename: data.txt
    # $ 3 line(s)