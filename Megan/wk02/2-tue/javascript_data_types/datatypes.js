/*

You're a bouncer at a bar. Given an `age` variable, create a conditional that satisfies the 
following requirements...
* If a patron is older than `21`, print out `"Come on in!"`.
* If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
* If a patron is younger than 18, print out `"You're too young to be in here!"`.
* If a patron is older than 75, print out `"Are you sure you want to be here?"`.

*/

var age = 75

if 	(age < 18) {
	console.log("You're too young to be in here!")
	
	} else if (age >18 < 21) {
	console.log(("Come on in (but no drinking)"))
	
	} else if (age >21) {
	console.log("Come on in")

	} else {

	(age > 75)
	console.log ("Are you sure you want to be here?")	
	
	}