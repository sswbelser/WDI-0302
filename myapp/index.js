var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello/:name', function (req, res) {
	res.send ('Hello there ' + req.params.name);
});

app.get('/api/users', function (req, res) {
	var users = [
		{name: "Sabastian", age: 26},
		{name: "Elliott", age: 30}
	];
	res.json(users);
});

app.get('/api/books', function (req, res) {
	var books = ["To Kill a Mockingbird", "The Hobbit", "Slaughterhouse Five"];
	res.send(books);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://localhost:3000', host, port);

});