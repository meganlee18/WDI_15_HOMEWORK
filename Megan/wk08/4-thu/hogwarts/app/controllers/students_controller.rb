class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def show
    #finding the ids in student table
    @student = student.find(params[:id])
  end
end
