var Room = require('./Room.js');

function Manager() {
	this.rooms = [];
}


Manager.prototype.addPlayerToRoom = function(roomId,playerName) {
	var room = this.getRoom(roomId);
	return room.addPlayer(playerName); //returns player object
}


Manager.prototype.createRoom = function(players) {
	var room = new Room(players);
	this.rooms.push(room);
}

Manager.prototype.getRooms = function() {
	var roomIds = [];
	this.rooms.forEach(function(room) {
		roomIds.push(room.getId());
	})
	return roomIds;
}

Manager.prototype.getRoom = function(id) {
	for (var i = 0; i < this.rooms.length; i++) {
		if (this.rooms[i].getId() == id)
			return this.rooms[i];
	}
	return false;
}

Manager.prototype.getRoomStatus = function(id) {
	var room = this.getRoom(id);
	return room.getStatus();
}

Manager.prototype.getRoomJSON = function(id) {
	var room = this.getRoom(id);

	return room.getJSON();
}


module.exports = Manager;