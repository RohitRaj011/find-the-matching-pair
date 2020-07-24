export { checkCards };
import { gameArr } from "../js/cardGenerator.js";

//To start the timer after click
var firstClick = false;

//timer variables
var ten = 0,
  sec = 0,
  min = 0;

//Timer Functions to Start and Display Timer
function startTimer() {
  if (firstClick == false) {
    firstClick = true;
    setInterval(function () {
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

//To check correct match of pair
function checkCards() {
  startTimer();
  $(this).css("transform", "rotateY(180deg)");
  // $(this).css("display", "none");
}
