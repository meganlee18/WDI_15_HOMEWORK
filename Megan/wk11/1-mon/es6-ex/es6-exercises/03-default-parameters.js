// Convert the driveTo method below to use ES6 default parameters.

// allow formal parameters to be initialized with default values 
// if no value or undefined is passed.

var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo: function ( place="Home" ) {
    this.location = place
  }
}

myRide.driveTo("Walmart")
myRide.location // "Walmart"

// vs...

myRide.driveTo()
myRide.location // "Home"