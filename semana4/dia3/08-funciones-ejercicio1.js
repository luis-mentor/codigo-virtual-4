/*
    Ejercicios de funciones
1. Crear un algoritmo donde existan una funcion
    que reciba un arreglo de edades y retorne a todos los mayores 
    de edad en un nuevo arreglo
    */
const filtroMayores = (edades) => {
    let mayores = [];
    for (let c = 0; c < edades.length; c++) {
        if (edades[c] >= 18) {
            mayores.push(edades[c]);
        }
    }
    return mayores;
};
let arreglo = [10, 15, 22, 24, 25, 10, 15, 31];
let losMayores = filtroMayores(arreglo);
console.log(losMayores);




