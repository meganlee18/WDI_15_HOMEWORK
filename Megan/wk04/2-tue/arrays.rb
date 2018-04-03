
#1: Create a variable named days_of_the_week as an array
days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

#2: Remove Sunday from the last postion and move it to the first position. Use array methods.
days_of_the_week.pop
days_of_the_week.unshift('Sunday')

#3: Create a new array of the days of the week:
    #The first inner array should be the weekdays
    #The second inner array should be the weekend days

    days_of_the_week = [
                       ["Monday","Tuesday", "Wednesday", "Thursday", "Friday"], 
                       ["Saturday", "Sunday"]
                    ]
   
  

#4  Remove either the weekdays or the weekends
days_of_the_week.shift

#5  Sort the remaining days alphabetically

days_of_the_week.Sort!