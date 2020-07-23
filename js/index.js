import { generateGrids } from "../js/cardGenerator.js";
import { generateCards } from "../js/gameAlgo.js";

function load() {
  generateGrids();
  generateCards();
}

window.onload = load();

// $(".flip-card-inner").click(function () {
//   startTimer();
//   $(this).css("transform", "rotateY(180deg)");
// });
