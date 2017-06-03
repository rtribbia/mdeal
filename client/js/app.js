

var api = {
	getRooms: function() {
		logStatus('get rooms...');
		$.getJSON( "api/rooms/", function( data ) {
			logStatus('games retreived.');
			logScript(JSON.stringify(data));
		})
	},
	joinRoom: function(playerName, roomId) {
		logStatus('join room');
		var payload = {"name":playerName};
		$.post({
		    url: "api/room/" + roomId + "/join",
		    data: JSON.stringify(payload),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(result,status,xhr){
		    	logStatus('room joined');
		    	logScript(JSON.stringify(result));
		    },
		    failure: function(errMsg) {
		        alert(errMsg);
		    }
		});
	}
}


function join1Room() {
	api.joinRoom('Player1','90414e7e-ad08-4647-97ad-d5880aefb6af');
}

function join2Room() {
	api.joinRoom('Player2','90414e7e-ad08-4647-97ad-d5880aefb6af');
}

function logScript(msg) {
	document.getElementById('scriptLog').innerHTML = msg;
}

function logStatus(msg) {
	document.getElementById('status').innerHTML = msg;
}

document.getElementById("getGames").onclick = api.getRooms;
document.getElementById("p1join").onclick = join1Room;
document.getElementById("p2join").onclick = join2Room;
