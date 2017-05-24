var cards = require('./cardDB_old.js');
var newCards = [];
var cardID = 0;

cards.forEach(function(card) {
	var newCard = {};
	newCard.id = cardID++;
	newCard.type = card["TYPE "].toUpperCase();

	if (card.NAME) {
		newCard.name = card.NAME;
	}

	if (card.VALUE) {
		newCard.value = card.VALUE;
	}

	if (newCard.type == "PROPERTY") {
		newCard.properties = [];

		if (card.NAME == "property wild card") {
			newCard.properties.push({color:"any"});
		} else {

			newCard.properties.push({
				"rent":card.PROP_A,
				"color":card.COLOR_A
			});

			if (card.PROP_B) {
				newCard.properties.push({
					"rent":card.PROP_B,
					"color":card.COLOR_B
				});
			}
		}
	}


	//If cart type is ACTION or CURRENCY, copy oldcard.color_a to newcard.color

	if ((card["TYPE "] == "currency") || (card["TYPE "] == "action")) {
		newCard.color = card.COLOR_A;
	}

	if (card.DESC) {
		newCard.description = card.DESC;
	}

	if (card.SUB) {
		newCard.subtext = card.SUB;
	}

	if (card.TARGET) {
		newCard.target = card.TARGET;
	}

	newCards.push(newCard);

	if (card.QTY > 1) {
		for (var i = 1; i < card.QTY; i++) {
			var dupeCard = JSON.parse(JSON.stringify(newCard));
			dupeCard.id = cardID++;
			newCards.push(dupeCard);
		}
	}
});

console.log(JSON.stringify(newCards));