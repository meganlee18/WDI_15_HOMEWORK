// search for the deposit button by tag name
// better choice may be giving it a class name in HTML and search by that
//var depositBtn = document.querySelector('button');
// querySelector returns a object with lots of properties including properties 
// to change the values and textContent

//var deposit = function () {
	//console.log('user click on deposit button');	


//get the value from the input box - #todo

//add value to balance and show in span - #todo

//tell button to run a function on a click event
//depositBtn.addEventListener('click', deposit)


var savingsWithdrawBtn = document.getElementsByClassName("savingswithdraw")[0];

var savingsWithdraw = function () {
	console.log("test")
	debugger
	document.getElementsByClassName("savingsDisplay")[0].innerHTML = "$00.00";
}
savingsWithdrawBtn.addEventListener('click', savingsWithdraw);


