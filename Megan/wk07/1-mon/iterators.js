/*
countIntegers – counts how many integers there are in an array
ex: countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
*/

var array = [4, 2.2, 5, 6, 4.2, 8.2, 4]

var countIntegers = function(array) {
  var integers = []

  array.forEach(function(element) {
    //check if value is integer
    // if (element % 1 === 0) {
    if (Number.isInteger(element)) {
      integers.push(element)
    }
  });
  return integers.length
}
countIntegers(array);



/*

Write code using .map() to have the following input and output:

getSquares – takes in an array of numbers and returns an array of their 
squares
ex: getSquares([1, 2, 3, 4, 5]) => [1, 4, 9, 16, 25]

*/

var array = [1, 2, 3, 4, 5];

var getSquares = function(array) {
  
  var squareNums = array.map(function(number) {
    return Math.pow(number, 2);
  });
  return squareNums;
}

getSquares(array);