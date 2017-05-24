var uuid = require('uuid');
var Deck = require('./Deck.js');

function Game(players) {
	this.id = 'g-' + uuid.v4();
	this.players = addPlayers(players);
	this.deck = new Deck();

	//testing
	this.init();
}


Game.prototype.init = function() {
	for (var i = 0; i < this.players.length; i++) {
		this.deck.dealCards(5,this.players[i]);
	}
}


Game.prototype.getId = function() {
	return this.id;
}

Game.prototype.getJSON = function() {
	var JSON = {};
	JSON.id = this.id;
	JSON.players = [];

	var gameScope = this;

	this.players.forEach(function(player) {
		var id = player.getId();
		var pJSON = player.getJSON();
		pJSON.hand = [];
		pJSON.bank = [];

		var hand = gameScope.deck.getPlayerHand(id);
		var bank = gameScope.deck.getPlayerBank(id);

		hand.forEach(function(card) {
			pJSON.hand.push(card.getJSON());
		})

		bank.forEach(function(card) {
			pJSON.bank.push(card.getJSON());
		})

		JSON.players.push(pJSON);
	})

	return JSON;
}

function addPlayers(players) {
	var playersArray = [];
	players.forEach(function(player) {
		playersArray.push(player.getId());
	});

	return playersArray;
}


module.exports = Game;