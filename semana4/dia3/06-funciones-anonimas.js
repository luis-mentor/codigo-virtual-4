/**
    FUNCIONES ANONIMAS
 */
// ES MAS RECOMENDABLE UTILIZAR LAS FUNCIONES ANONIMASSSSSS.....

//Este tipo de funciones se guardan en la misma variable
const tablaDeMultiplicar = function (numero) {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c * numero}`);
    }
};
tablaDeMultiplicar(11);
