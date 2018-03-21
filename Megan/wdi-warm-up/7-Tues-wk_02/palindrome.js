console.log ('test');

/*

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

*/
//check word if palindrom
//



/*function reverseString(str) {
	var splitString = str.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join();
	return joinArray;
}
reverseString (str)*/


word = 'car'
var wordArr = word.split("")
wordArr 
wordArr.reverse()
(wordArr.join('') === wordArr.reverse().join('')

var returnCleanSpring = function(forString) {
	var string = forString.toLowerCase();
	string = string.replace(/[^a-z]/g, "")
	return string
console.log(returnCleanSpring("hello !!! Yo"))
}





