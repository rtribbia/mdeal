var express = require('express');


module.exports = function(manager) {
	var router = express.Router();

	router.route('/rooms')

		.get(function(req, res) {
		    res.json(manager.getRooms());
		});


	router.route('/room/:roomId')

		.get(function(req, res) {
		 	//res.send(manager.getRoom(req.params.roomId));   
		 });

	router.route('/room/:roomId/join')
		.post(function(req, res) {
			var name = req.body.name;
			var roomId = req.params.roomId;
			var room = manager.getRoom(roomId);

			player = manager.addPlayerToRoom(roomId,name);

			var responseJSON = {
				clientId: player.getId(),
				room: room.getJSON()
			}

		    res.json(responseJSON);
		});

	router.route('/room/:roomId/games')
		.put(function(req, res) {
		    res.send('/api/games/' + req.params.game_id + ' PUT')
		});

	return router;
}


 