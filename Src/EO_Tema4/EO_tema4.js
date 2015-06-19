var express = require('express');
//var path = require('path');
var app = express();

//app.use(express.static(path.join(__dirname, 'public'))); // ruta /
	
app.get('/preguntas', function (req, res) { // ruta /mi_ruta

	var resultado = '<html>' +
					'	<head>' +
					'		<title>' +
					'			Preguntas' +
					'		</title>' +
					'	</head>' +
					'	<body>' +
					'		<h3>&iquest;Qui&eacute;n descubri&oacute; Am&eacute;rica?</h3>' +
					'		<form method="get" action="/respuesta">' +
					'			<input type="text" name="respuesta" value="Indique aqu&iacute; la respuesta"/>' +
					'			<input type="hidden" name="pregunta" value="1"/>' +
					'			<input type="submit" value="Enviar"/>' +
					'		</form>' +
					'		<h3>&iquest;Capital de Portugal?</h3>' +
					'		<form method="get" action="/respuesta">' +
					'			<input type="text" name="respuesta" value="Indique aqu&iacute; la respuesta"/>' +
					'			<input type="hidden" name="pregunta" value="2"/>' +
					'			<input type="submit" value="Enviar"/>' +
					'		</form>' +
					'	</body>' +
					'</html>';

	res.send(resultado);

});

app.get('/respuesta', function (req, res) { // ruta /hola/:n con parametro

	var respuesta = (req.query.respuesta || '').toLowerCase();
	var respuestas[] = ('', 'cristobal colon', 'lisboa');
	var resultados[] = ('La respuesta es correcta', 'La respuesta es incorrecta');
	var pregunta = req.query.pregunta || 0;
	var correcta = (pregunta > 0 && respuesta = respuestas[pregunta]);
	var resultado = resultados[correcta];
	
	if (!correcta) {
		resultado = resultado + ', ';
	}
	
		resultado = '<html>' +
					'	<head>' +
					'		<title>' +
					'			Respuesta' +
					'		</title>' +
					'	</head>' +
					'	<body>' +
					'		<h3>' + resultado + '</h3>' +
					' ' +
					'	</body>' +
					'</html>';

	
	res.send(resultado);
	
});


app.get('*', function (req, res) { // *: cualquier otra ruta
	res.send('URL incorrecto');
	//res.status(404).sendFile('/img/404.png');
	//sería para c:\img\404.png siempre absoluto
});

app.listen(8000);