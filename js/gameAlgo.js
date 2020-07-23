import { maxCards, Deck } from "../js/cardGenerator.js";
export { generateCards };

let gameArr = [];

//To start the timer after click
var firstClick = false;

//timer variables
var ten = 0,
  sec = 0,
  min = 0;

// deck properties
let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
let values = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

// deck initialise
let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();

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

//adds the card properties and position it
function renderCard(deck, cardPosition) {
  var card = document.getElementsByClassName("flip-card-back");
  var icon = "";
  if (deck[0].suit == "Hearts") {
    icon = "♥";
    card[cardPosition].style.color = "red";
  } else if (deck[0].suit == "Spades") {
    icon = "♠";
    card[cardPosition].style.color = "black";
  } else if (deck[0].suit == "Diamonds") {
    icon = "♦";
    card[cardPosition].style.color = "red";
  } else {
    icon = "♣";
    card[cardPosition].style.color = "black";
  }

  card[cardPosition].innerHTML =
    "<span>" + deck[0].value + "<br>" + icon + "</span>";
}

// generates the random cards
function generateCards() {
  var j = 0;
  for (var position = 0; position < maxCards; position++) {
    // if (gameArr[position] == undefined) {
    //   gameArr[position] = deck[j];
    renderCard(deck.deal(), position);

    document
      .getElementsByClassName("flip-card-inner")
      [position].addEventListener("click", checkCards);
  }
}

function checkCards() {
  startTimer();
  $(this).css("transform", "rotateY(180deg)");
  // $(this).css("display", "none");
}
