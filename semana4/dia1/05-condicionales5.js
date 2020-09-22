/**
 * Crear un algoritmos para verificar si un año es bisiesto
 * teoría: 
 * es divisible entre 4
 * Excepto si es divisible entre 100
 * O que simplemente sea divisible entre 400
 */
/*
let anio = +prompt("Ingresar el año:")

if(anio % 4 === 0 || anio % 400 && anio % 100 !== 0){
    console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");
}
*/
// metodo profe
let anio = +prompt("Ingresar el año")
if (anio % 4 === 0) {
    if (anio % 100 !== 0) {
        console.log("El año es bisiesto");
    } else {
        console.log("El año No es bisiesto");
    }
} else {
    if (anio % 400 === 0) {
        console.log("El año es bisiesto");
    } else {
        console.log("El año No es bisiesto");
    }
}

// otra forma
let anio = +prompt("Ingresar el año")
if (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0){
    console.log("El añoo es bisiesto");
} else{
    console.log("El año no es bisiesto");
}

