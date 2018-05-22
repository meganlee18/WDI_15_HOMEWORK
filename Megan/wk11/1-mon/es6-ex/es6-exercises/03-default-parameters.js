// Convert the driveTo method below to use ES6 default parameters.

// allow formal parameters to be initialized with default values 
// if no value or undefined is passed.

var myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo: function ( place ) {
    this.location = place || "Home"
  }
}

myRide.driveTo("Walmart")
myRide.location // "Walmart"

// vs...

myRide.driveTo()
myRide.location // "Home"



// function myRide ({
//   make = "Ford",
//   model = "Model T",
//   year = 1959,
//   location = "the Office",
//   driveTo = {
//     this.location = "Home"
//   }
// }


// function createElement ({
//   content = 'Very default',
//   classNames = ['module-text', 'special']
// } = {}) {
//   // function body
// }