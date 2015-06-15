var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public'))); // ruta /
	
app.get('/mi_ruta', function (req, res) { // ruta /mi_ruta
	res.send('<html><body><h1>Mi Ruta</h1></body></html>');
	console.log('req.method =          ' + req.method);
	console.log('req.path =            ' + req.path);
	console.log("req.req.get('host') = " + req.get('host'));
});

app.get('/hola/:n?', function (req, res) { // ruta /hola/:n con parametro
	res.send('Hola ' + (req.params.n || 'an\u00F3nimo'));
});

app.get('/service/:op/user/:id', function (req, res) { // ruta /service/:op/user/:id con parametros op e id
	res.send('Usuario ' + req.params.id + ' solicita ' + req.params.op);
});

app.get('/user/:id(\\d+)', function (req, res) { // ruta /user/:id con parametro condicionado
	res.send('Usuario ' + req.params.id);
});

app.get('*', function (req, res) { // *: cualquier otra ruta
	res.send('URL incorrecto');
	//res.status(404).sendFile('/img/404.png');
	//sería para c:\img\404.png siempre absoluto
});

app.listen(8000);