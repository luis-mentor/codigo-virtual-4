/**
 * ESTRUCTURA SWITCH - CASE
 
 Un break indica la FINALIZACIÓN DE UN CASE
 */
let numero = +prompt("Ingresar numero")

switch (numero) {
    case 1: console.log("lunes"); break;
    case 2: console.log("martes"); break;
    case 3: console.log("miercoles"); break;
    case 4: console.log("jueves"); break;
    case 5: console.log("viernes"); break;
    case 6: console.log("sabado"); break;
    case 7: console.log("domingo"); break;
    default: console.log("Error, Ingresar número correcto"); // aqui no va el breack
}


