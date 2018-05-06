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
    correct_guess = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].sample
    if params[:number] == correct_guess
      @guess = "Well done! Your guess is correct"
    elsif params[:number].blank?
      @guess = "C'mon, give me a number..."
    else
      @guess = "Oops, try again..."
    end
  end

  def rock_paper_scissors
  end

  def rock_paper_scissors_play
  end
end
