class HousesController < ApplicationController
  def index
    @houses = House.all
  end

  def show
    #return the first id in the house table,
    #id is based on id that's been passed in the <a>
    @house = House.find_by(id: params[:id])
  end
end
