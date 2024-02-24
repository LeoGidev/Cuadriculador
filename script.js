var canvas = document.getElementById('miCanvas');
var contexto = canvas.getContext('2d');

var tamanoCuadro = 200;
var cuadrosPorLado = 10;
var tamañoTotal = tamanoCuadro * cuadrosPorLado;
var portada = 200;

var colorFondo = '#ffffff';
var colorLineas = '#00ff00';
var colorNumeros = '#000000';


var imagen = new Image();
imagen.src = 'rifa.png';

// Esperar a que la imagen de fondo se cargue antes de dibujar
imagen.onload = function () {
  // Dibuja la imagen de fondo
  contexto.drawImage(imagen, 0, 0, canvas.width, canvas.height);

  // Dibuja la cuadrícula
  dibujarCuadricula();
};

function cambiarColorLineas() {
  colorLineas = document.getElementById('colorLineas').value;
  // Dibuja la cuadrícula al cambiar el color de las líneas
  dibujarCuadricula();
}

function dibujarCuadricula() {
  // Dibujar la cuadrícula y los números
  for (var i = 0; i < cuadrosPorLado; i++) {
    for (var j = 0; j < cuadrosPorLado; j++) {
      var x = i * tamanoCuadro * (canvas.width / tamañoTotal);
      var y = j * tamanoCuadro * ((canvas.height - portada) / tamañoTotal);

      // Dibujar el cuadro en el canvas con el nuevo color de líneas
      contexto.lineWidth = 5;
      contexto.strokeStyle = colorLineas;
      contexto.strokeRect(x, y + portada, (canvas.width) / 10, (canvas.height - portada) / 10);
    }
  }
}

// Función para descargar la imagen
function descargarImagen() {
  var enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = canvas.toDataURL('image/png');
  enlaceDescarga.download = 'image.png';
  enlaceDescarga.click();
}

function cargarImagenDeFondo() {
  var input = document.getElementById('imagenFondoInput');
  var archivo = input.files[0];

  if (archivo) {
    var imagenFondo = new Image();
    imagenFondo.onload = function () {
      // Dibuja la imagen de fondo
      contexto.drawImage(imagenFondo, 0, 0, canvas.width, canvas.height);
      
      // Dibuja la cuadrícula después de cargar la nueva imagen
      dibujarCuadricula();
    };
    imagenFondo.src = URL.createObjectURL(archivo);
  }
}


