export { maxCards, generateGrids, Deck };

var maxCards = 32; //Total Cards
var numberRow = 8; //no. of cards in each Row

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
    //while (hand.length < 1) //deals half the total cards (pair-find)
    hand.push(this.deck.pop());
    return hand;
  }
}

// To generate Rows depending upon Total Cards
function rowGenerate() {
  for (var row = 0; row < maxCards / numberRow; row++) {
    var flex_container = document.createElement("div");
    flex_container.className = "flex-container";
    document.getElementById("cardWrapper").appendChild(flex_container);
  }
}

// To generate Card Grids
function generateGrids() {
  rowGenerate();
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

    document
      .getElementsByClassName("flex-container")
      [Math.floor(numberCards / numberRow)].appendChild(flip_card);
  }
}
