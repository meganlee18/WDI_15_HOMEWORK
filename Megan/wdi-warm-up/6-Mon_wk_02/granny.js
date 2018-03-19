/*
Write a function 'grannyTalk' what takes a question as an argument and returns a string as 
her response.

If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"

If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"

The year will be a random year between 1930 and 1950.

If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."




bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.

sample output of grandpaTalk:

// NO, NOT SINCE incorrect year // whats that sunny

*/


//set a promot to allow input
//set up while loop because you want to keep asking questions (true) until question is false
//set up function within while loop


var person = prompt("Please ask a question")
var resultCaps = person.toUpperCase ();	
var grannyTalk = function () {
	if (person === resultCaps) {
		console.log (grannyCaps);
	} else {
	} console.log (grannyNormal);
}
grannyTalk();


/*

var randomYear = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
} // creates range and then adds back base to return a number in our wanted range. could use round() instead of floor and '+1', this reduces end probabilities

var question = prompt('Hello honey. What do you want to ask your dear old gran?')

while (question !== 'BYE') {
  if (question === question.toUpperCase()) {
    question = prompt('NO, NOT SINCE ' + randomYear(1930, 1950) + '\nWhat\'s that darling?')
  } else {
    question = prompt('SPEAK UP HONEY!')
  }
}

alert('What\'s that honey, I didn\'t hear you.. zzz')
*/


