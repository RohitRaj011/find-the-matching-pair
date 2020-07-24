export { checkCards };
import { gameArr } from "../js/cardGenerator.js";

//to start the timer after click
var firstRun = false;

//checking for pairs variables
var firstClick = false,
  secondClick = false,
  thirdClick = false;
var resetTime; //if the user clicks before closing of wrong pair of cards it prevents three cards to open simultaneously
var x1, x2; //variables that store the card id

//timer variables
var ten = 0,
  sec = 0,
  min = 0,
  time; //to stop the timer on game-over

//Timer Functions to Start and Display Timer
function startTimer() {
  if (firstRun == false) {
    firstRun = true;
    time = setInterval(function () {
      ten++;
      if (ten == 100) {
        ten = 0;
        sec++;
        printTimer(sec, "seconds");
        printTimer(ten, "tens");

        if (sec == 60) {
          sec = 0;
          min++;
          printTimer(min, "minutes");
          printTimer(sec, "seconds");
        }
      } else {
        printTimer(ten, "tens");
      }
    }, 10);
  }
}
function printTimer(time, id) {
  if (time < 10) {
    document.getElementById(id).innerHTML = "0" + time;
  } else {
    document.getElementById(id).innerHTML = time;
  }
}

//to check if the clicked cards are same
function checkCards() {
  startTimer();
  if (thirdClick == false) {
    if (firstClick == false) {
      firstClick = true;
      $(this).css("transform", "rotateY(180deg)");
      x1 = this.id;
    } else {
      if (secondClick == false) {
        secondClick = true;
        thirdClick = true;
        $(this).css("transform", "rotateY(180deg)");
        x2 = this.id;
        if (_.isEqual(gameArr[x1], gameArr[x2])) {
          setTimeout(matched, 400);
        } else {
          resetTime = setTimeout(reset, 500);
        }
      }
    }
  } else {
    clearTimeout(resetTime);
    reset();
    firstClick = false;
    secondClick = false;
    thirdClick = false;
  }
}
function matched() {
  firstClick = false;
  secondClick = false;
  thirdClick = false;
  $("#" + x1).fadeOut(100);
  $("#" + x2).fadeOut(100);
  gameArr[x1] = 0;
  gameArr[x2] = 0;
  if (winCheck(gameArr) == 1) {
    clearInterval(time);
    document.getElementById("time").innerHTML =
      "Your Time is " +
      min +
      " Minutes " +
      sec +
      " Seconds " +
      ten +
      " Milliseconds";
  }
}

//to check if all cards have been paired
function winCheck(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) return 0;
  }
  return 1;
}

//flip all the cards to original position
function reset() {
  firstClick = false;
  secondClick = false;
  thirdClick = false;
  $(".flip-card-inner").css("transform", "rotateY(0deg)");
}
