/*
    Funciones que retornen parámetros
*/
/**
 * Funcion que retorna el factorial de un número
 * @param {*} numero parámetro de entrada al que se le va
 * calcular el factorial
 */

function factorial(numero){
    let rpt = 1;
    for(let c=numero; c>0; c--){
        rpt=rpt*c;
    }
    return rpt;
}
let resultado = factorial(6);
console.log(resultado);

// No se podía imprimir solo "rpt" debido a que eso está dentro del scoup
// No se puede retornar mas de un valor
















