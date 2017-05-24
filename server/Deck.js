var cardDB = require('./cardDB.js');
var Card = require('./Card.js');

function Deck(gameId) {
	this.gameId = gameId;
	this.cards = generateDeck();
}


Deck.prototype.getPlayerCards = function(playerId) {
	return getCardsByOwner(playerId, this.cards);
}

Deck.prototype.getPlayerHand = function(playerId) {
	var playerCards = getCardsByOwner(playerId, this.cards);
	return getCardsByLocation("hand", playerCards);
}

Deck.prototype.getPlayerBank = function(playerId) {
	var playerCards = getCardsByOwner(playerId, this.cards);
	return getCardsByLocation("bank", playerCards);

}

Deck.prototype.dealCards = function(amt,playerId) {
	for (var i = 0; i < amt; i++) {
		var availableCards = this.getUndealtCards();
		card = availableCards[Math.floor(Math.random() * availableCards.length)];
		card.dealTo(playerId);
	}
}

Deck.prototype.getCard = function(cardId) {

	for (var i = 0; i < cards.length; cards++) {
		if (cards[i].getId == cardId) {
			return card;
		}
	} 
}


Deck.prototype.getUndealtCards = function() {
	var cards = [];
	
	this.cards.forEach(function(card) {
		if ((card.getOwner() == "server") && (!card.getPlayed())) {
			cards.push(card);
		}
	})
	return cards;
}


//Shuffles entire deck (not just unplayed) via Knuth shuffle (TY STACKOVERFLOW)
Deck.prototype.shuffleDeck = function() {
	  var currentIndex = this.cards.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = this.cards[currentIndex];
	    this.cards[currentIndex] = this.cards[randomIndex];
	    this.cards[randomIndex] = temporaryValue;
	  }
}

//Private functions
function generateDeck() {
	var cards = [];

	cardDB.forEach(function(cardObj) {
		cards.push(new Card(cardObj));
	});

	return cards;
}

function getCardsByOwner(owner, cardArray) {
	var playerCards = [];

	cardArray.forEach(function(card) {
		if (card.getOwner() == owner) {
			playerCards.push(card);
		}
	})
	return playerCards;
}

function getCardsByLocation(location, cardArray) {
	var locationCards = [];

	cardArray.forEach(function(card) {
		if (card.getLocation() == location) {
			locationCards.push(card);
		}
	})
	return locationCards;
}

module.exports = Deck;