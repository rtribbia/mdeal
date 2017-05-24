

var api = {
	getGames: function() {
		logStatus('getting games...');
		$.getJSON( "api/games/", function( data ) {
			logStatus('games retreived.');
			logScript(JSON.stringify(data));
		})
	},
	postGames: function(data) {
		logStatus('posting games...');
		var payload = {"players":data};
		$.post({
		    url: "api/games/",
		    data: JSON.stringify(payload),
		    contentType: "application/json; charset=utf-8",
		    dataType: "json",
		    success: function(result,status,xhr){
		    	logStatus('game created');
		    	logScript(JSON.stringify(result));
		    },
		    failure: function(errMsg) {
		        alert(errMsg);
		    }
		});
	}
}


function createDummyGame() {
	var players = ["player1","player2"];
	api.postGames(players);
}


function logScript(msg) {
	document.getElementById('scriptLog').innerHTML = msg;
}

function logStatus(msg) {
	document.getElementById('status').innerHTML = msg;
}

document.getElementById("getGames").onclick = api.getGames;
document.getElementById("postGames").onclick = createDummyGame;