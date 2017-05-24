
function Card(card) {

	this.played = false;
	this.location = "";
	this.previousOwner = "";
	this.owner = "server";
	this.id = card.id;
	this.name = card.name;
	this.type = card.type;

	if (card.value) {
		this.value = card.value;
	}

	if (card.color) {
		this.color = card.color;
	}

	if (card.description) {
		this.description = card.description;
	}

	if (card.subtext) {
		this.subtext = card.subtext;
	}

	if (card.target) {
		this.target = card.target;
	}

	if (card.properties) {
		this.properties = card.properties;
	}

}

Card.prototype.dealTo = function(playerId) {
	this.setOwner(playerId);
	this.location = "hand";
}

Card.prototype.getJSON = function(){
	var JSON = {};

	JSON.played = this.played;
	JSON.location = this.location;
	JSON.owner = this.owner;
	JSON.id = this.id;
	JSON.name = this.name;
	JSON.type = this.type;

	if (this.value) {
		JSON.value = this.value;
	}

	if (this.color) {
		JSON.color = this.color;
	}

	if (this.description) {
		JSON.description = this.description;
	}

	if (this.subtext) {
		JSON.subtext = this.subtext;
	}

	if (this.target) {
		JSON.target = this.target;
	}

	if (this.properties) {
		JSON.properties = this.properties;
	}

	return JSON;
}

// -------------------
// setters
// -------------------

Card.prototype.setPlayed = function(played) {
	this.played = played;
}

Card.prototype.setOwner = function(owner) {
	this.previousOwner = this.owner;
	this.owner = owner;
}

Card.prototype.setPreviousOwner = function(owner) {
	this.previousOwner = owner;
}


Card.prototype.setLocation = function(location) {
	this.location = location;
}

// -------------------
// getters
// -------------------

Card.prototype.getId = function() {
	return this.id;
}

Card.prototype.getPlayed = function() {
	return this.played;
}

Card.prototype.getOwner = function() {
	return this.owner;
}

Card.prototype.getLocation = function() {
	return this.location;
}

Card.prototype.getValue = function() {
	return this.value;
}

Card.prototype.getColor = function() {
	return this.color;
}

Card.prototype.getDescription = function() {
	return this.description;
}

Card.prototype.getSubtext = function() {
	return this.subtext;
}

Card.prototype.getProperties = function() {
	return this.properties;
}

Card.prototype.getTarget = function() {
	return this.target;
}

module.exports = Card;