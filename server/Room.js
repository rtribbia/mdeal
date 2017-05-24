var uuid = require('uuid');
var Game = require('./Game.js');
var Player = require('./Player.js');

function Room(playerCount) {
	// this.id = uuid.v4();
	this.id = "90414e7e-ad08-4647-97ad-d5880aefb6af"; //TEST ID
	this.playerLimit = playerCount;
	this.players = [];
	this.games = [];
	this.currentGame;
}

Room.prototype.addPlayer = function(name) {
	var player = new Player(name);
	this.players.push(player);
	return player;
}

Room.prototype.removePlayer = function(player) {

}

Room.prototype.createGame = function() {
	var game = new Game(players);
	this.games.push(game);
	this.currentGame = game;
	return game;
}

Room.prototype.initCurrentGame = function() {
	return this.currentGame.startGame();
}

Room.prototype.getId = function() {
	return this.id;
}

Room.prototype.getJSON = function() {
	var obj = {
		currentGame: this.currentGame ? this.currentGame.getId() : 'none',
		playerLimit: this.playerLimit
	};

	var players = [];

	this.players.forEach(function(player) {
		players.push(player.getId());
	})

	obj.players = players;

	return obj;
}

module.exports = Room;