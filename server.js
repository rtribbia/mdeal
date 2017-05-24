var express  = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

var Manager = require('./server/Manager.js');
var manager = new Manager();

var routes = require('./server/api.js')(manager);

manager.createRoom(2); //create 2 player room;

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client')));
app.use('/api', routes);

var port = process.env.PORT || 8080;

app.listen(port);
console.log('Server running on port: ' + port);