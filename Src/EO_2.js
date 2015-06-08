function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
	titulo: function()           { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)     { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()           { return JSON.stringify(_contenido);},
	listar: function()           {
		
		var resultado = "";
		
		for (var contacto in _contenido){
			resultado = resultado + contacto + ": " + _contenido[contacto] + "\n";
		}
		
		return resultado;
		
	}
  }
}

var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               Jos\u00E9: 157845123,
               Jes\u00FAs: 178512355
             });
			 
console.info(amigos.listar());