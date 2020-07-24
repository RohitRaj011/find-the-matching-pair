import { generateGrids, generateCards } from "../js/cardGenerator.js";

function load() {
  generateGrids(); //generate the grids
  generateCards(); //generate cards + check for all pair-matching and game-sense
}

window.onload = load();
