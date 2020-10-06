/**
 * CALLBACKS
 */

const nombres = ["Jorge", "Luis", "Ximena"];
const dnis = ["20202020", "12345678", "01020304"];

const buscarPorDni = (dni, callback) => {
    for (let c = 0; c < dnis.length; c++) {
        if (dnis[c] === dni) {
            console.log(nombres[c]);
            callback();
        }
    }
};
const resultado = () => {
    console.log("Llegó el resultado");
};

buscarPorDni("12345678", resultado);