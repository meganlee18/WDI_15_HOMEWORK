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

var savingsNumInput = document.querySelector('.savingsnum')
var checkingNumInput = document.querySelector('.checkingnum')

var savingsWithdrawBtn = document.querySelector('.savingswithdrawbutton');
var checkingWithdrawBtn = document.querySelector('.checkingwithdrawbutton');

var savingsDepositBtn = document.querySelector('.savingsdepositbutton');
var checkingDepositBtn = document.querySelector('.checkingdepositbutton');

var savingsResult = document.querySelector('.savingsresult');
var checkingResult = document.querySelector('.checkingresult');


//Savings
//Adding initial value
var savingsDeposit = function () {
	var balance = Number((savingsNumInput.value))
	console.log('total: ', balance);
	savingsResult.textContent = balance;
}
	//savingsDepositBtn.addEventListener('click', savingsDeposit);

//Adding to NumInput	
var addToSavingsDeposit = function () {
	var balance = Number(savingsResult.textContent) + Number(savingsNumInput.value)
		console.log('total: ', balance);
		savingsResult.textContent = balance;
		
		var savings = document.querySelector('.savings');	
		var overdrawn = function () {
				if (balance <= 0) {
					savings.classList.add('overdrawn');
				} else {
					savings.classList.remove('overdrawn');
				}
			}
			savings.addEventListener('click', overdrawn);
		}
		
	savingsDepositBtn.addEventListener('click', addToSavingsDeposit);

//Subtracting from NumInput
var subtractingSavingsDeposit = function () {
	var balance = Number(savingsResult.textContent) - Number(savingsNumInput.value)
		console.log('total: ', balance);
		if (balance < 0) {
			alert ("Uh-oh! You have insufficient funds");
		} else {
			savingsResult.textContent = balance;
	
	var savings = document.querySelector('.savings');	
	var overdrawn = function () {
			if (balance <= 0) {
				savings.classList.add('overdrawn');
			} else {
				savings.classList.remove('overdrawn');
			}
		}
		savings.addEventListener('click', overdrawn);
	}
}
	savingsWithdrawBtn.addEventListener('click', subtractingSavingsDeposit);


//Deposit
//Adding initial value
var checkingDeposit = function () {
	var balance = Number(checkingNumInput.value)
		console.log('total: ', balance);
		checkingResult.textContent = balance;
	}
	// checkingDepositBtn.addEventListener('click', checkingDeposit);

//Adding to NumInput	
var addToCheckingDeposit = function () {
	var balance = Number(checkingResult.textContent) + Number(checkingNumInput.value)
		console.log('total: ', balance);
		checkingResult.textContent = balance;

		var checking = document.querySelector('.checking');	
		var overdrawn = function () {
				if (balance <= 0) {
					checking.classList.add('overdrawn');
				} else {
					checking.classList.remove('overdrawn');
				}
			}
			checking.addEventListener('click', overdrawn);
		}
	
	checkingDepositBtn.addEventListener('click', addToCheckingDeposit);

//Subtracting from NumInput
var subtractingCheckingDeposit = function () {
	var balance = Number(checkingResult.textContent) - Number(checkingNumInput.value)
	console.log('total: ', balance);
	if (balance < 0) {
		alert ("Uh-oh! You have insufficient funds");
	} else {
		checkingResult.textContent = balance;
	
	var checking = document.querySelector('.checking');	
	var overdrawn = function () {
			if (balance <= 0) {
				checking.classList.add('overdrawn');
			} else {
				checking.classList.remove('overdrawn');
			}
		}
		checking.addEventListener('click', overdrawn);
	}
}		
	checkingWithdrawBtn.addEventListener('click', subtractingCheckingDeposit);