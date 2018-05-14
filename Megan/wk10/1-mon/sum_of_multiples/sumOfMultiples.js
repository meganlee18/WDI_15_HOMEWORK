// If we list all the natural numbers below 10 that are multiples of 
// 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Write a program that, given a number, can find the sum of all the 
// multiples of 3 or 5 up to and including that number.

var findSum = function (num) {

  var sum = 0;

  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i)
      sum = sum + i
    }
  }
  console.log(sum)
}

findSum(10);

//Write the program in javascript with nodejs.
//e.g $ node sumOfMultiples.js 9
//    $ 23

console.log(process.argv)


var total = 0;

for (var i = 2; i < process.argv.length; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i)
    total = total + i;
  }

  console.log(total)
}