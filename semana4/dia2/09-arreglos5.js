/**
    Llenar un arreglo con N números ingresados por el usuario
 */

const n = 5;
let numeros = [];

for(let c=0; c<n; c++){
    let ingreso= +prompt("Ingrese un número");
    numeros.push(ingreso);
    //numeros[c]= +prompt("Ingrese un número"); : Esto es una variable implícita

}
console.log(numeros);

