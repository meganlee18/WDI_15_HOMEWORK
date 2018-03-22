
// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

	//*hints*
	//build the string and return it or ...
	//just console log the built string in here



	var calculateAge = function (currentYear, birthYear) {
		var ageOne = currentYear - birthYear;
		var ageTwo = ageOne + 1
		var message = "You are either " + ageOne + " or " + ageTwo;
		console.log(message)
	}

	 calculateAge(2018,1945)




//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

//list = ["cake","pudding"]
//list[0].length
//[4,7]

var lengths = function (arrOfStrings) {

var strings = []

for (var index = 0; index < arrOfStrings.length; index++) {
	strings.push(arrOfStrings[index].length);
}
	return strings;
}
lengths( ["test","water"] )



// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var num1 = ''
var num2 = ''
var num3 = ''

var transmogrifier = function (num1,num2,num3) {
	var product = (num1*num2);
	var result = Math.pow(product, num3);
	return result
 }

 transmogrifier(1,2,3)


// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.


//objective: input 'word Up' should reverse to 'Up word' as output
//split sentence into array of words and reverse them

var string = ' '

var wordReverse = function (string) {
	return ((string.split(" ")).reverse()).join(" ")
}
wordReverse("Where are you going today")





