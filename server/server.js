var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var shapeRoute = require("./routes/shape.server.route");

// Use native Node promises
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/im-co-challenge")
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

//Express request pipeline
var app = express();
var server = http.createServer(app);

// socket.io setup
var io = require('socket.io')(server);

io.on('connection', function(socket) {
	console.log('user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	// receiving signal from one connection on button pressed with sort data
	socket.on('sortBy', function(sort) {
		console.log('button to sort by ' + sort + ' was pressed.');
		// emmiting signal to all connections with sort data
		io.emit('sortBy', sort);
	});
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", shapeRoute);

app.get('/', function (req, res) {
	res.render('index');
});

// create path for statistics
app.get('/statistics', function(req, res) {
	res.sendFile('statistics.html', { root: 'app/' });
	// res.render('statistics');
});

// starting server
server.listen(7777, function () {
    console.log("Started listening on port", 7777);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
