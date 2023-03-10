var myArray: number[] = [1, 1, 2, 2, 3, 3];

var i: number;
var j: number;
var k: number;

for (i = myArray.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray[i - 1];
    myArray[i - 1] = myArray[j];
    myArray[j] = k;
}



var totalTime = 20;

function updateClock() {
    var contador: any = document.getElementById('countdown');
    contador.innerHTML = "Cuenta atrás: " + totalTime;
    if (totalTime == 0 && aciertos != 3) {
        alert("Has perdido");
    }
    else if (totalTime != 0 && aciertos == 3) {
        alert("Has ganado");
        totalTime = totalTime + 1;
    }

    else {
        totalTime -= 1;
        setTimeout("updateClock()", 1000);
    }
}

function preparar() {
    var contenedor: any = document.getElementById("contenedor");
    var div: any = "";

    div += "<div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'>";
    div += "<img class='tux' src='../img/back.png' id='img0' alt='' onclick='intento(0, " + myArray[0] + ")'>";
    div += "</div>";
    div += "<div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'>";
    div += "<img class='tux' src='../img/back.png' id='img1' alt='' onclick='intento(1, " + myArray[1] + ")'>";
    div += "</div>";
    div += "<div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'>";
    div += "<img class='tux' src='../img/back.png' id='img2' alt='' onclick='intento(2, " + myArray[2] + ")'>";
    div += "</div>";
    div += "<div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'>";
    div += "<img class='tux' src='../img/back.png' id='img3' alt='' onclick='intento(3," + myArray[3] + ")'>";
    div += "</div>";
    div += "<div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'>";
    div += "<img class='tux' src='../img/back.png' id='img4' alt='' onclick='intento(4, " + myArray[4] + ")'>";
    div += "</div>";
    div += "<div class='col-xs-6 col-sm-6 col-md-4 col-lg-4'>";
    div += "<img class='tux' src='../img/back.png' id='img5' alt='' onclick='intento(5, " + myArray[5] + ")'>";
    div += "</div>"
    div += "<button type='button' class='btn btn-default' onclick='reiniciar()'>Jugar</button>";

    contenedor.innerHTML = div;

}

var contador: number = 0;
var img1: any = "";
var idImg1:any = 0;

var aciertos: number = 0;

function intento(numero: any, idfoto: any) {
    contador++;
    var imagen: any = document.getElementById("img" + numero);

    if (idfoto == 1) {
        imagen.src = "../img/imagen1.png";
    }

    if (idfoto == 2) {
        imagen.src = "../img/imagen2.png";
    }

    if (idfoto == 3) {
        imagen.src = "../img/imagen3.png";
    }

    if (contador == 1) {
        img1 = idfoto;
        idImg1 = numero;
    } else if (contador == 2) {
        if (idfoto != img1) {
            console.log(img1, numero);

            var imagenguardada: any = document.getElementById("img" + numero);
            var imagenguardada: any = document.getElementById("img" + idImg1);
            setTimeout(() => {

                imagenguardada.src = "../img/back.png";
                imagen.src = "../img/back.png";
            }, 1000);
            contador = 0;
        } else {
            aciertos++;
            contador = 0;
        }
    }
}

function reiniciar() {
    location.reload();
}