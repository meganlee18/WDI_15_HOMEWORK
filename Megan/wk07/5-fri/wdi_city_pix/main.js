/*
Update the drop down box to show the five cities NYC, SF, LA, SYD, ATX. 
Note: You might need to research how to add DOM objects to a web page to 
be able to add option tags to the select tag.

When you select a city in the drop-down box, the background image should 
change to show that city. The images for the five cities are in the 
images folder. We have already provided the css code for changing the 
background image in the style.css file (at the bottom). Feel free to use 
those classes.
*/

var cityType = document.getElementById('city-type');
var optionOne = document.createElement("option");
var optionTwo = document.createElement("option");
var optionThree = document.createElement("option");
var optionFour = document.createElement("option");
var optionFive = document.createElement("option");


//Adding first option and class name
optionOne.text = "Austin";
cityType.add(optionOne);
optionOne.setAttribute('class', 'austin');

//Adding second option and class name
optionTwo.text = "Los Angeles";
cityType.add(optionTwo);
optionTwo.setAttribute('class', 'la');

//Adding third option and class name
optionThree.text = "New York City";
cityType.add(optionThree);
optionThree.setAttribute('class', 'nyc');

//Adding fourth option and class name
optionFour.text = "San Francisco";
cityType.add(optionFour);
optionFour.setAttribute('class', 'sf');

//Adding fifth option and class name
optionFive.text = "Sydney";
cityType.add(optionFive);
optionFive.setAttribute('class', 'sydney');

//define change background function
function changeBackground() {
  var getValue = document.getElementById("city-type").value;
  cityType.options[cityType.selectedIndex].style.backgroundImage = "url('../images/austin.jpg')"
  console.log("background changed!");
}

//add onchange function to cityType
document.getElementById("city-type").onchange = function() {
  changeBackground();
};


