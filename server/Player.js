var uuid = require('uuid');

function Player(name) {
	this.name = name;
	this.id = 'p-' + uuid.v4();
}

Player.prototype.getName = function() {
	return this.name;
}

Player.prototype.getId = function() {
	return this.id;
}

Player.prototype.getGameId = function() {
	return this.gameId;
}

Player.prototype.setGameId = function(gameId) {
	this.gameId = gameId;
}

Player.prototype.getJSON = function() {
	var JSON = {};
	JSON.name = this.name;
	JSON.id = this.id;
	return JSON;
}

module.exports = Player;