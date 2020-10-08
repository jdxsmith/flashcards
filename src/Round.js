const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        return this.deck[0];
    }
    takeTurn(guess) {
        this.turns += 1;
        const turn = new Turn(guess, this.deck[0]);
        turn.giveFeedback();
    }
}

module.exports = Round;