var uuid = require('uuid');
var Game = require('./Game.js');
var Player = require('./Player.js');

function Room(playerCount) {
	// this.id = uuid.v4();
	this.status = "WAITING";
	this.id = "90414e7e-ad08-4647-97ad-d5880aefb6af"; //TEST ID
	this.playerLimit = playerCount;
	this.players = [];
	this.games = [];
	this.currentGame;
}

Room.prototype.addPlayer = function(name) {
	var player = new Player(name);
	this.players.push(player);

	//Is the room filled and we're ready to go?
	if (this.players.length == this.playerLimit) {
		this.setStatus("READY");
	}

	return player;
}


Room.prototype.setStatus = function(status) {
	this.status = status;
}

Room.prototype.getStatus = function() {
	return this.status;
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
		playerLimit: this.playerLimit,
		status: this.status
	};

	var players = [];

	this.players.forEach(function(player) {
		players.push(player.getJSON());
	})

	obj.players = players;

	return obj;
}

module.exports = Room;