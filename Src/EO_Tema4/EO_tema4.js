var express = require('express');
//var path = require('path');
var app = express();

//app.use(express.static(path.join(__dirname, 'public'))); // ruta /
	
app.get('/preguntas', function (req, res) {

	var resultado = '<!doctype html>' +
					'<html>' +
					'	<head>' +
					'		<title>' +
					'			Preguntas' +
					'		</title>' +
					'	</head>' +
					'	<body>' +
					'		<h3>&iquest;Qui&eacute;n descubrió América?</h3>' +
					'		<form method="get" action="/respuesta">' +
					'			<input type="text" name="respuesta" value="Indique aqu&iacute; la respuesta">' +
					'			<input type="hidden" name="pregunta" value=1>' +
					'			<input type="submit" value="Enviar">' +
					'		</form>' +
					'		<h3>&iquest;Capital de Portugal?</h3>' +
					'		<form method="get" action="/respuesta">' +
					'			<input type="text" name="respuesta" value="Indique aqu&iacute; la respuesta">' +
					'			<input type="hidden" name="pregunta" value=2>' +
					'			<input type="submit" value="Enviar">' +
					'		</form>' +
					'	</body>' +
					'</html>';

	res.send(resultado);

});

app.get('/respuesta', function (req, res) {

	var respuesta = (req.query.respuesta || '').toLowerCase();
	var respuestas = ['', 'cristobal colon', 'lisboa']; //Usaremos este array para las comparaciones y para devolver la respuesta correcta
	var resultados = ['La respuesta es incorrecta, la respuesta es ', 'La respuesta es correcta']; //En este array definimos los enunciados a devolver
	var pregunta = req.query.pregunta || 0; //El parametro con el número de pregunta será 0 si no viniera
	var correcta = ((pregunta > 0) && (respuesta === respuestas[pregunta])); //Si la pregunta es > 1 y la respuesta coincide será correcta
	var resultado = resultados[(correcta ? 1 : 0)]; //Seleccionamos la respuesta resultante
	
	//Añadimos la respuesta correcta en caso de fallo
	if (!correcta) {
		resultado = resultado + respuestas[pregunta];
	}
	
	//Componemos la página alrededor de la respuesta
	resultado = '<!doctype html>' +
				'<html>' +
				'	<head>' +
				'		<title>' +
				'			Respuesta' +
				'		</title>' +
				'	</head>' +
				'	<body>' +
				'		<h3>' + resultado + '</h3>' +
				'		<a href="/preguntas">Volver</a>' +
				'	</body>' +
				'</html>';
	
	//Enviamos la respuesta
	res.send(resultado);
	
});


app.get('*', function (req, res) { // *: cualquier otra ruta
	res.send('URL incorrecto');
});

app.listen(8000);