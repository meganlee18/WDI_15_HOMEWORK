require "pry"
require "active_record"
require_relative "db_config"
require_relative "models/movie"

ActiveRecord::Base.logger = Logger.new(STDERR)

binding.pry
