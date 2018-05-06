class GamesController < ApplicationController
  def index
  end

  def magic_ball
    if params[:question].blank?
      @answers = "Write your question above to get a prediction"
    else
      @answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"].sample
    end
  end

  def secret_number
    @possible_guess = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].sample
    if params[:number] == @possible_guess
      @guess = "Well done! Your guess is correct"
    elsif params[:number].blank?
      @guess = "C'mon, give me a number between 1 to 10"
    else
      @guess = "Oops, not so lucky this time! The correct number is " + @possible_guess
    end
  end

  def rock_paper_scissors
    @user_choices = ["scissors", "rock", "paper"]
    #Where does the computer make its choice?
    @computer_choices = ["scissors", "rock", "paper"]
  end

  def rock_paper_scissors_play
    if params[:throw] == "scissors" #&& @computer_choices == "scissors"
      @results = "It's a tie!"
    end
  end
end
