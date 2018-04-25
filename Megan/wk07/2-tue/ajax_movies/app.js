/*

Instead of returning a single title, the OMDb API allows you to do a search 
which will return multiple titles.

For example if you search on Jaws, you will get a list like the following:

Jaws
Jaws 2
Jaws 3-D
Jaws Special
Jaws Wired Shut

write a frontend app to allow users to enter a search for movies, and to 
show the list of title within h2 tags without page refresh.

index.html
app.js
style.css

*/


var $searchBtn = $('.searchbtn')

//Add row and cell to table
function addRow(title) {
  //var table = document.getElementById("myTable");
  var $table = $('#myTable')[0]; //jQuery for the above
  var row = $table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = title;
}

//console.log to return the value after field input
$searchBtn.on('click', function(event) {
  console.log(input.value)
  $.ajax({
    url: "http://omdbapi.com/?apikey=2f6435d9&s=" + input.value
  }).done(function(res) {
    //clear table before new input
    $("#myTable tr").remove();

    //loop through arrays to get the movie title
    res.Search.forEach(function(element) {
      console.log(element.Title)
      //call the addRow function    
      addRow(element.Title)
    });
  })
});

//Refreshes the page without reloading
$searchBtn.on('click', function(event) {
  event.preventDefault();
  console.log("Page is refreshed!")
});