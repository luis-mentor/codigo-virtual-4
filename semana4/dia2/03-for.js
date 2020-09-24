/**
Primer ejemplo del ciclo F O R 
 */
// for (let c = 0; c < 15; c++) {
//     console.log(`12 x ${c} = ${12 * c}`);
// }

/*
    Crear un algoritmo para multiplicar dos números
*/
let a = +prompt("ingresar un numero");
let b = +prompt("Ingresar un segundo numero:")
let sumatoria = 0;
for (let intentos = 0; intentos < a; intentos++) {
    sumatoria = sumatoria + b;
}
console.log(`El producto: ${a} x ${b} = ${sumatoria}`);







