//ni idea xd
//alert('Hola Mundo desde una alerta en Java Script')

//Consola
//console.log('Hola desde la consola');

//Declaración de una variable
//let nombre = "Cindy";
//Concatenar texto y variable
//console.log("Me llamo: ",nombre);
//Variables no pueden ser palabras reservadas
//Al nombrarlas usaremos un nombre que te da idea de lo que estas almacenado

//Constantes
//const pi= 3.1416;

//Tipos de datos
//Número
//let edad = 10;
//Cadena de texto
//let saludo = "Hola"

//Boleanos de 2 valores
//let activo = true;

//Operadores aritmeticos
//Suma +
//Resta -
//Multiplicación *
//Divición /
//Modulo o redis¿duo %
//incremento ++
//decremento --

// Operadores relacionale
// mayor y menor que < >
// mayor o igual >=
// menor o igual <=
// igual que ==
// Diferente de !=

// Operadores lógicos
// y &&
// or ||

//Reloj Digital
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}

setInterval(currentTime, 1000);
