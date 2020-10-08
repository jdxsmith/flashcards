const Turn = require('./Turn.js');
class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.percentCorrect;
  }
  returnCurrentCard() {
    return this.deck[0];
  }
  takeTurn(guess) {
    this.turns += 1;
    let topCard = this.deck[0];
    const turn = new Turn(guess, topCard);
    this.deck.shift();
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(topCard.id)
    }
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    this.percentCorrect = (this.turns - this.incorrectGuesses.length) / this.turns * 100;
    return this.percentCorrect;
  }
  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
