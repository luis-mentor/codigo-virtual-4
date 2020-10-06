/**
Primer ejemplo del ciclo F O R 
- Se crea la variable dentro del for para que solamene se ejecute ahí
  es decir que sólo valga en ese scoup
 */
// for (let c = 0; c < 15; c++) {
//     console.log(`12 x ${c} = ${12 * c}`);
// }


//    Crear un algoritmo para multiplicar dos números

let a = +prompt("ingresar un numero");
let b = +prompt("Ingresar un segundo numero:")
let sumatoria = 0;
for (let intentos = 0; intentos < a; intentos++) {
    sumatoria = sumatoria + b;
}
alert(`El producto: ${a} x ${b} = ${sumatoria}`);





