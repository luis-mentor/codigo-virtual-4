/**
 * Dato un monto ingresado por el usuario
 * Calcular: 
 * - Billetes de 200
 * - billetes de 100
 * - billetes de 50
 * - billetes de 20
 * Que el cajero automático debe entregar

 */

let monto = 1980;
let b200 = 0;
let b100 = 0;
let b50 = 0;
let b20 = 0;
let modulo=0;


b200 = (monto - (monto%200))/200;
monto = monto - b200 * 200;

b100 = (monto - (monto%100))/100
monto = monto - b100 * 100;

b50 = (monto - (monto%50))/50;
monto = monto - b50 * 50;

b20 = (monto - (monto%20))/20;
monto = monto - b20 * 20;

console.log("Billetes de 200: " + b200);
console.log("Billetes de 100: " + b100);
console.log("Billetes de 50: " + b50);
console.log("Billetes de 20: " + b20);
console.log("Quedan "+monto+ " soles pal banco :v");

/*
    HACER LOS EJERICIOS DE LA PAGINA 43 A LA PAGINA 45
*/

