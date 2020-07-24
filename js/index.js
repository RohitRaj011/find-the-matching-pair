import { generateGrids, generateCards } from "../js/cardGenerator.js";

function load() {
  generateGrids();
  generateCards();
}

window.onload = load();

// $(".flip-card-inner").click(function () {
//   startTimer();
//   $(this).css("transform", "rotateY(180deg)");
// });
