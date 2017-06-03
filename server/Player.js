var uuid = require('uuid');

function Player(name) {
	this.name = name;
	this.id = 'p-' + uuid.v4();
	this.status = "new";
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

Player.prototype.getStatus = function() {
	return this.status;
}

Player.prototype.setStatus = function(status) {
	this.status = status;
}

Player.prototype.getJSON = function() {
	var JSON = {};
	JSON.name = this.name;
	JSON.id = this.id;
	JSON.status = this.status;
	return JSON;
}

module.exports = Player;