//Print out all the leap years in the last 100 years.

//For numbers between 1 and 200:
//a) print out multiples of 7.
//b) print out every second odd number.

//BONUS: Print out all prime numbers between 0 and 200.

for (var count = 1918; count <=2018; count++) {
	if (count % 4 === 0) {
		console.log (count);
	}
}

var leapYear = 2020;

for (var i = 1; i < 100; i+=4){

	leapYear -=4;
	console.log (leapYear);

}


// For numbers between 1 and 200:
// a) print out multiples of 7.
// b) print out every second odd number.

// BONUS: Print out all prime numbers between 0 and 200.



for (var count = 1; count <=200; count ++) {
	if (count % 7 === 0 ) {
		console.log (count);
	}
}


//Solution One//
for (var count = 0; count <=200; count ++) {
	if (count % 4 === 3)  {
		console.log (count);
	}
}

//Solution Two//
var flag = false;
for (var count = 0; count <=200; count ++) {
	if (count%2==1) {
		if (flag === true){
		console.log (count);
		flag=false;
		} else {
			flag = true;
		}	
	}
}
