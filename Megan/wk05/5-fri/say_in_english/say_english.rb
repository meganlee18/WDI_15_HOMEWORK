=begin

Write a program that will take a number from 0 to 99 and spell 
out that number in English.

In other words, if the input to the program is 22, then the output 
should be 'twenty-two'

The program must also report any values that are out of range.

Some good test cases for this program are:

0
14
50
98
-1
100

=end

require "pry"
require "humanize"

class Say
  def initialize(num)
    @num = num
  end

  def in_english
    if @num.between?(0, 99)
      @num.humanize
    else
      "#{@num} is out of range!"
    end
  end
end
