/**
    Funciones de Flecha
 */

//  let tablaDeMultiplicar = function (numero) {
//     for (let c = 0; c <= 10; c++) {
//         console.log(`${c} x ${numero} = ${c * numero}`);
//     }
// };

// Una funcion de flecha es una función anónima, sólo que está escrita
// en version moderna de JavaScript, siendo aún mucho más recomendada.
// solo que está escrito en sintaxis moderna de JavaScript

let tablaDeMultiplicar = (numero) => {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c * numero}`);
    }
};
tablaDeMultiplicar(5);