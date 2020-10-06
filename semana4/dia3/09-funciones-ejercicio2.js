/**
 * Dada la función, sumar 4 números, imprimir su resultado, sin usar
 * el signo mas
 */
const sumar = (a, b) => {
    return a + b;
};
// Aqui utilizamos a la funcion dentro de la misma función
let a = sumar(sumar(89, 5), sumar(12, 14));
console.log(`La suma de esos 4 números es ${a}`);
