require "pry"
require_relative "say_english"
require "humanize"

puts Say.new(0).in_english
puts Say.new(14).in_english
puts Say.new(50).in_english
puts Say.new(98).in_english
puts Say.new(-1).in_english
puts Say.new(100).in_english
