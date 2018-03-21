console.log("test")

/*

####Exercise Bob, Jimbo and Fish love mini golf. But, like all good golfers they enjoy the 
19th hole the most. Every time they hand in their score cards none of the scores are ever totalled. 
Write a function called totalScores in JS that calculates their scores and 'console.logs' the total 
for the club house.

#####Bob
Hole 1 = 3
Hole 2 = 2
Hole 3 = 6
Hole 4 = 11
Hole 5 = 9
Hole 6 = 2
Hole 7 = 6
Hole 8 = 9
Hole 9 = 10


#####Jimbo
Hole 1 = 5
Hole 2 = 12
Hole 3 = 9
Hole 4 = 22
Hole 5 = 13
Hole 6 = 7
Hole 7 = 16
Hole 8 = 10
Hole 9 = 11

#####Fish
Hole 1 = 2
Hole 2 = 2
Hole 3 = 4
Hole 4 = 5
Hole 5 = 4
Hole 6 = 3
Hole 7 = 6
Hole 8 = 4
Hole 9 = 1

####Extension Now work out each golfers round compared to the course par.

#####Par

Hole 1 = 3
Hole 2 = 4
Hole 3 = 5
Hole 4 = 5
Hole 5 = 3
Hole 6 = 3
Hole 7 = 4
Hole 8 = 3
Hole 9 = 5
####Ninja Extension Fish loves a punt. Having placed a $1 bet on each stroke over par that 
Bob and Jimbo played per hole calculate his winnings.

*/

//Part One

//Method One
scores ({
	hole 1: 5,
	hole 2: 12,
});

var totalScores = function (scores, name) {
	var total = return scores.hole1 + scores.hole2 + scores.hole3 + scores.hole4 + scores.hole5 + 
	scores.hole6 + scores.hole7 + scores.hole8 + scores.hole9; 

	console.log(name + "'s score is " + total);
}

//Method Two
var name = ["Bob", "Jimbo", "Fish"]
var jimbo = [5,12,9,22,13,7,16,10,11]

var totalScores = function (scores, name) {
	var total = 0;
	for (var i = 0, i<0, i++) {
		var total = score[i] + total;
	}


//Method Three

bobNum = [3,2,6,11,9,2,6,9,10]
for (var i=0; i<=bobNum.length, i++) {

var bobNum1 = 3
var bobNum2 = 2
var bobNum3 = 6
var bobNum4 = 11 
var bobNum5 = 9 
var bobNum6 = 2 
var bobNum7 = 6 
var bobNum8 = 9 
var bobNum9 = 10 


function add (bobNum1,bobNum2,bobNum3,bobNum4,bobNum5,bobNum6,bobNum7,bobNum8,bobNum9) {
	return (bobNum1+bobNum2+bobNum3+bobNum4+bobNum5+bobNum6+bobNum7+bobNum8+bobNum9);
}

var bobTotal = add(bobNum1,bobNum2,bobNum3,bobNum4,bobNum5,bobNum6,bobNum7,bobNum8,bobNum9);

var jimboNum1 = 5
var jimboNum2 = 12
var jimboNum3 = 9
var jimboNum4 = 22
var jimboNum5 = 13
var jimboNum6 = 7
var jimboNum7 = 16
var jimboNum8 = 10
var jimboNum9 = 11

function add (jimboNum1,jimboNum2,jimboNum3,jimboNum4,jimboNum5,jimboNum6,jimboNum7,jimboNum8,jimboNum9) {
	return (jimboNum1+jimboNum2+jimboNum3+jimboNum4+jimboNum5+jimboNum6+jimboNum7+jimboNum8+jimboNum9);
}

var jimboTotal = add(jimboNum1,jimboNum2,jimboNum3,jimboNum4,jimboNum5,jimboNum6,jimboNum7,jimboNum8,jimboNum9);


var fishNum1 = 2
var fishNum2 = 2
var fishNum3 = 4
var fishNum4 = 5
var fishNum5 = 4
var fishNum6 = 3
var fishNum7 = 6
var fishNum8 = 4
var fishNum9 = 1

function add (fishNum1,fishNum2,fishNum3,fishNum4,fishNum5,fishNum6,fishNum7,fishNum8,fishNum9) {
	return (fishNum1+fishNum2+fishNum3+fishNum4+fishNum5+fishNum6+fishNum7+fishNum8+fishNum9);
}

var fishTotal = add(fishNum1,fishNum2,fishNum3,fishNum4,fishNum5,fishNum6,fishNum7,fishNum8,fishNum9);


function add (bobTotal,jimboTotal,fishTotal) {
	return bobTotal + jimboTotal + fishTotal
}

var totalScores = add(bobTotal,jimboTotal,fishTotal);
console.log(totalScores)

//Part Two

var holeOne = {
	golferOne: "Bob",
	scoreOne: 3,
	golferTwo: "Jimbo",
	scoreTwo: 5,
	golferThree: "Fish",
	scoreThree:2,
};

function add (scoreOne, scoreTwo, scoreThree) {
	return (holeOne.scoreOne + holeOne.scoreTwo + holeOne.scoreThree)

}

var holeOneResult = add (holeOne.scoreOne, holeOne.scoreTwo, holeOne.scoreThree)
console.log(holeOneResult)


var holeTwo = {
	golferOne: "Bob",
	scoreOne: 2,
	golferTwo: "Jimbo",
	scoreTwo: 12,
	golferThree: "Fish",
	scoreThree: 2,
};

function add (scoreOne, scoreTwo, scoreThree) {
	return (holeTwo.scoreOne + holeTwo.scoreTwo + holeTwo.scoreThree)

}

var holeTwoResult = add (holeTwo.scoreOne, holeTwo.scoreTwo, holeTwo.scoreThree)
console.log(holeTwoResult)


