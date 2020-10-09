const data = require('./data');
const questions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


class Game {
  constructor() {
      this.currentRound;
      this.deck;
  }
  createNewDeck() {
    let cardDeck = [];
    questions.forEach(card => {
      let newCard = new Card(card.id, card.question, card.answers, card.correctAnswer)
      cardDeck.push(newCard);
    })
    let deck = new Deck(cardDeck);
    this.deck = deck;
  }
  createNewRound(deck) {
    this.currentRound = new Round(deck);
  }
  start() {
    this.createNewDeck();
    this.createNewRound(this.deck)
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;