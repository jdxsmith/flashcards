const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
      
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
      
    expect(turn).to.be.an.instanceof(Turn);
  });
    
  it('should take in a guess as first parameter', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
      
    expect(turn.guess).to.deep.equal('sea otter');
  });
    
  it('should take in a card as second parameter', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
      
    expect(turn.card).to.deep.equal(card);
  });
    
  it('should return a guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
      
    turn.returnGuess();
      
    expect(turn.returnGuess()).to.deep.equal(turn.guess);
  });
    
  it('should return a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
      
    turn.returnCard();
       
    expect(turn.returnCard()).to.deep.equal(turn.card);
  });
    
  it('should evaluate if guess is correct or not', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
      
    turn.evaluateGuess();
       
    expect(turn.evaluateGuess()).to.deep.equal(true);
  });
    
  it('should give feedback based on guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
      
    turn.giveFeedback();
       
    expect(turn.giveFeedback()).to.deep.equal('Correct!');
  });
}); 