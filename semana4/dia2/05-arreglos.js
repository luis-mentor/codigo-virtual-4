/*
     A R R E G L O S
     Es una cajita, 

     Propiedades de los Array:
     ¿Obten la cantidad de datos de un arreglo?
     console.log(x.lenght);  // Rpta. 4 : Porque el arreglo tiene 4 elementos

     ¿Como imprimo el ultimo elemento de un arreglo?
     console.log(x[x.lenght-1]);

     ¿Cómo recorrer un arreglo?
     for( let c=0; c<x.lenght; c++){
        console.log(x[c]);
     }
*/

const numeros=[5, -1, 11, 777];
// Imprimir un solo elemento del arreglo dada su posición
console.log(numeros[1]);

// Imprimir todos los elementos (inclusivo)
console.log("Imprimir todos los números del arreglo");
for(let c=0; c<numeros.length; c++){
    console.log(numeros[c]);
}

// Imprimir todo el arreglo
console.log("Imprimir todo el arreglo");
console.log(numeros);

// Imprimir el tamaño del arreglo o la cantidad de elementos que tiene
console.log("Imprimir la cantidad de elementos del arreglo");
console.log(numeros.length);









