/**
 * Estructuras condicionales
 Condicional: Si el precio es mayor que 2500, hacer descuento del 10%
 */
let precio = 20000;

if (precio > 2500) {
    //Lineas a ejecutar cuando la condicion sea verdadera
    console.log("Si se hace descuento");
} else {
    console.log("No se aplica descuento");
}

/**
 * Comparadores Aritméticos
 * > mayo y menor
 * <= menor o igual o mayor o igual
 * == igual
 * != diferente 
 * /
 */

// Ejemplo:
let peso = +prompt("Ingrese su peso en Kilogramos:")
let altura = +prompt("Ingrese su altura en Mts: ")
const imc = peso / (altura * altura);
console.log(imc);
if (imc <= 15) {
    console.log("El paciente presenta delgadez");
} else {
    if (imc > 25) {
        console.log("El paciente presenta sobrepeso");
    } else {
        console.log("El paciente se encuentra en su peso ideal");
    }
}



