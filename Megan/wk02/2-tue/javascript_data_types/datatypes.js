/*

You're a bouncer at a bar. Given an `age` variable, create a conditional that satisfies the 
following requirements...
* If a patron is older than `21`, print out `"Come on in!"`.
* If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
* If a patron is younger than 18, print out `"You're too young to be in here!"`.
* If a patron is older than 75, print out `"Are you sure you want to be here?"`.

*/

var age = 75

if (age < 18) {
	console.log("You're too young to be in here!")

} else if (age > 18 < 21) {
	console.log(("Come on in (but no drinking)"))

} else if (age > 21) {
	console.log("Come on in")

} else {

	(age > 75)
	console.log("Are you sure you want to be here?")

}

/*

Fizz-Buzz is a classic coding exercise that you can create using your knowledge of 
conditionals and loops. Implement code that does the following...

Counts from 1 to 100 and prints out something for each number.
If the number is divisible by 3, print "Fizz".
If the number is divisible by 5, print "Buzz".
If the number is divisible by both 3 and 5, print "FizzBuzz".
If the number does not meet any of the above conditions, just print the number.

*/

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz")
	} else if (i % 5 === 0) {
		console.log("Buzz")
	} else if (i % 3 === 0) {
		console.log("Fizz")
	} else {
		console.log(i)
	}
}