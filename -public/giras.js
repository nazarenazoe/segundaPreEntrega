/* let nombre = prompt("¿Cuál es tu nombre?");
let edad = parseInt(prompt("¿Cuál es tu edad?"));

alert("Hola " + nombre + " de " + edad + " años, ¿Te interesaría adquirir tickects?") */

//CODIGO PARA SOLICITAR NOMBRE AL USUARIO
let nombre = prompt("Cuál es tu nombre?").toUpperCase();

while (nombre.length < 3) {
    nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?").toUpperCase();
}
const span = document.getElementById("welcome");
span.textContent = "Hola, " + nombre + "!";



//CODIGO PARA SOLICITAR EDAD AL USUARIO
const edad = prompt("Por favor, ingrese su edad:");
const edadMinima = 18;
const botonesTickets = document.querySelectorAll("tickets");

// Comprobacion
if (edad !== null) { // Que el usuario no pueda dejar vacio el alert
    if (parseInt(edad) < edadMinima) {
        swal(
            "Ups :(", "Este evento es para mayores de 18 años.", "warning",
        );
        botonesTickets.style.backgroundColor = 'red'; //cambiar color al boton
        botonesTickets.style.cursor = "not-allowed"; //cambiar el estilo del cursor
        botonesTickets.disabled = true;  // desactivar el botón 
    } else {
        swal(
            "Perfecto", "Podemos continuar con la compra", "success",
        );
    }
}


//PRIMER CODIGO PARA COMPRA DE TICKETS, TODAVIA NO TENIA OBJETO.
/* let contador = 0;
const maxTickets = 8;

function getTickets(lugar) {
    contador++;
    if (contador <= maxTickets) {
        swal(
            "Felicidades " + nombre + " :)", "Adquiriste tus tickets para ver a Shakira en: " + lugar, "success",
        );
    } else {
        swal(
            "Ups, lo sentimos :(", "Ya no hay tickets disponibles", "error",
        );
    }
}; */


//CODIGO PARA COMPRA DE TICKETS CON UN OBJETO QUE ALMACENA EL N° DE TICKETS SEGUN EL LUGAR
let tickets = {
    "Buenos Aires, Argentina": 3,
    "Rio de Janeiro, Brasil": 2,
    "La Paz, Bolivia": 2,
    "Santiago de Chile, Chile": 1,
    "Bogotá, Colombia": 5
};
// función para comprar tickets

function getTickets(lugar) {
    if (tickets[lugar] > 0) {
        tickets[lugar]--;
        swal("Felicidades! :)", "Compraste una entrada para " + lugar, "success");
    /* } else {
        swal("Lo siento :(", "Entradas agotadas para " + lugar, "error");
    }  */
    }if (tickets[lugar] === -1) {
        swal("Lo siento :(", "Entradas agotadas para " + lugar, "error");
    }

    // Ejecutar la función para deshabilitar botones de lugares agotados
    disableSoldOutButtons();
} 
// función para deshabilitar botones de lugares agotados
 function disableSoldOutButtons() {
    const botones = document.querySelectorAll(".tickets");

    botones.forEach(boton => {
        const lugar = boton.getAttribute("onclick").match(/'(.+?)'/)[1]; // Extraer el lugar del atributo onclick segun google :p
        if (tickets[lugar] === 0) {
            boton.disabled = true;
            boton.innerText = "SOLD OUT";
        }
    });
} 
