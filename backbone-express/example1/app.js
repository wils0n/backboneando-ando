
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var cons = require('consolidate');
var fs = require('fs');
var uuid = require('node-uuid');
var baseData = fs.readFileSync('./base-data.json').toString();

var data = JSON.parse(baseData);

var app = express();

// all environments
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', cons.swig);
//app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routes
app.get('/', routes.index);
app.get('/users', user.list);

app.get('/problems/', function(req, res){
	res.send(data);
});

app.post('/problems', function (req, res){
	req.body.id = uuid.v1();
	//req.body.votes = 0;
	// req.body.image = "/img/img3.jpg";
	// req.body.user  = "Siedrix";

	data.push(req.body);

	console.log('problems::create', req.body);

	io.sockets.emit('problems::create', req.body);

	res.send(200, {status:"Ok", id: req.body.id});
});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);