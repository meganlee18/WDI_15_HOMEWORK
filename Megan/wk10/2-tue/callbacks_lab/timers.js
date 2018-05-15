var timer = document.getElementById("timer")
var resetBtn = document.getElementById("reset")
var startBtn = document.getElementById("start")
var pauseBtn = document.getElementById("pause")

var seconds = 0
var timeId;

//When "start" is clicked
startBtn.addEventListener("click", function () {

  //replace "Stop Watch" with "Time elapsed: 0"
  timer.textContent = "Time elapsed: " + seconds

  //start timer, increment by 1 second
  function updateTime() {
    seconds += 1
    timer.textContent = "Time elapsed: " + seconds
  }
  timerId = setInterval(updateTime, 1000);
})

//When "pause" button is clicked
pauseBtn.addEventListener("click", function () {

  console.log("pause button is pressed")
  //Stop -- but do not reset! -- the timer using clearInterval()
  clearInterval(timerId);
})

//when "reset" button is clicked
resetBtn.addEventListener("click", function () {

  console.log("reset button is pressed!")

  //Reset the timer
  seconds = 0;
  console.log(`timer resets to ${seconds} second`)

  //Replace the time with original "Stop Watch" text
  timer.textContent = "Stop Watch"
})
