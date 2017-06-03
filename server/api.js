var express = require('express');


module.exports = function(manager) {
	var router = express.Router();

	router.route('/rooms')

		.get(function(req, res) {
		    res.json(manager.getRooms());
		});


	router.route('/room/:roomId')

		.get(function(req, res) {
		 	var responseJSON = manager.getRoomJSON(req.params.roomId); 
		 	res.json(responseJSON);  
		 });

	router.route('/room/:roomId/join')
		.post(function(req, res) {

			//Req parameters
			var name = req.body.name;
			var roomId = req.params.roomId;

			//get room obj
			var room = manager.getRoom(roomId);

			//create player, get result obj
			player = manager.addPlayerToRoom(roomId,name);

			var responseJSON = {
				clientId: player.getId(),
				room: room.getJSON()
			}

		    res.json(responseJSON);
		});

	router.route('/room/:roomId/action')
		post(function(req,res) {
			var type = req.body.type;
			

			var room = manager.getRoom(req.params.roomId);

			if (type == "ready") {
				//set player as ready
				room.playerReady(req.body.client);
				var responseJSON = manager.getRoomJSON(req.params.roomId); 
		 		res.json(responseJSON);  
			}


		});

	router.route('/room/:roomId/games')
		.put(function(req, res) {
		    res.send('/api/games/' + req.params.game_id + ' PUT')
		});

	return router;
}


 