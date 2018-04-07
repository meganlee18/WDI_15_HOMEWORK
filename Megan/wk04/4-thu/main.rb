require "sinatra"
require "sinatra/reloader"
require "stock_quote"
require "pry"

get "/" do
  erb :index
end


get "/about" do
  erb :about
end


get "/stock_info" do

  # Define a method that makes a request to the Google Finance
  #api via the stock_quote gem.
  # This method should take, as paramater, a stock ticker
  # This method should return data about the stock

  #Display, for example, google's
  #stock price when there is GET request to /?stock=APPL

  stock_info = StockQuote::Stock.quote(params[:stock_symbol])
  #binding.pry
  @price = stock_info.latest_price

  erb :stock_info
end
