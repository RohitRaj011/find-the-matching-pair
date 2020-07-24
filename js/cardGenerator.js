export { generateGrids, generateCards, gameArr };
import { checkCards } from "../js/gameAlgo.js";

var maxCards = 48; //Total Cards

// Card Generator Classes and Functions
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    this.deck = [];
  }

  //creates the deck
  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }
    return this.deck;
  }

  // shuffles the deck
  shuffle() {
    let counter = this.deck.length,
      temp,
      i;
    while (counter) {
      i = Math.floor(Math.random() * counter--);
      temp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = temp;
    }
    return this.deck;
  }

  // deals the card
  deal() {
    let hand = [];
    //deals half the total cards (pair-find)
    while (hand.length < maxCards / 2) {
      hand.push(this.deck.pop());
    }
    return hand;
  }
}

// To generate Card Grids
function generateGrids() {
  for (var numberCards = 0; numberCards < maxCards; numberCards++) {
    var flip_card = document.createElement("div");
    var flip_card_inner = document.createElement("div");
    var flip_card_front = document.createElement("div");
    var flip_card_back = document.createElement("div");

    flip_card.className = "flip-card";
    flip_card_inner.className = "flip-card-inner";
    flip_card_front.className = "flip-card-front";
    flip_card_back.className = "flip-card-back";

    flip_card_inner.appendChild(flip_card_front);
    flip_card_inner.appendChild(flip_card_back);
    flip_card.appendChild(flip_card_inner);

    document.getElementById("cardWrapper").appendChild(flip_card);
  }
}

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
let gameArr = []; //to store the random card position and value
let deck = new Deck();
deck.createDeck(suits, values);
deck.shuffle();

// generates random cards
function generateCards() {
  let hand = deck.deal();
  for (var j = 0; j < hand.length; j++) {
    gameArr[2 * j] = hand[j];
    gameArr[2 * j + 1] = hand[j];
  }
  let counter = gameArr.length,
    temp,
    i;
  while (counter) {
    i = Math.floor(Math.random() * counter--);
    temp = gameArr[counter];
    gameArr[counter] = gameArr[i];
    gameArr[i] = temp;
  }
  renderCard(gameArr);
}

//adds the card properties and position it
function renderCard(deck) {
  for (var i = 0; i < maxCards; i++) {
    var card = document.getElementsByClassName("flip-card-back");
    var icon = "";
    if (deck[i].suit == "Hearts") {
      icon = "♥";
      card[i].style.color = "red";
    } else if (deck[i].suit == "Spades") {
      icon = "♠";
      card[i].style.color = "black";
    } else if (deck[i].suit == "Diamonds") {
      icon = "♦";
      card[i].style.color = "red";
    } else {
      icon = "♣";
      card[i].style.color = "black";
    }

    card[i].innerHTML = "<span>" + deck[i].value + "<br>" + icon + "</span>";
    document
      .getElementsByClassName("flip-card-inner")
      [i].addEventListener("click", checkCards);
  }
}
