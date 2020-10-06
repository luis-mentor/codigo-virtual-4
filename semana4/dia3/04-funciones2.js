/**
    Funciones que reciben PARAMETROS
 */
function tablaDeMultiplicar(numero) {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c * numero}`);
    }
}

tablaDeMultiplicar(9);
console.log("------------");
tablaDeMultiplicar(80);
console.log("------------");
tablaDeMultiplicar(45);
console.log("------------");
tablaDeMultiplicar(7);

/*
let arreglo = [5, 8, 4, 7, 2, 3];

for (let c = 0; c < arreglo.length; c++) {
    console.log(`Tabla del ${arreglo[c]}`);
    tablaDeMultiplicar(arreglo[c]);
}

*/


