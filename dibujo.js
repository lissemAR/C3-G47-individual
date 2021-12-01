var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick );

function dibujoPorClick()
  {
    var xxx = parseInt(texto.value);
    var lineas = xxx;
    var l = 0;
    var yi, xf;
    var espacio = ancho / lineas;

    while(l < lineas)
     {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarlinea("blue", 0, yi, xf, 300);
        console.log("lineas" + l );
        l = l + 1;
     }

    dibujarlinea("pink", 1, 1, 1, 299);
    dibujarlinea("pinñ", 1, 299, 299, 299);
  }


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
