/*
    FOREACH
*/

// Es una función propia de los arreglos, sirve para recorrer un arreglo
// sin necesidad de usar un ciclo for

const nombre = ["Juliana", "Carlos", "monica", "Abel", "Pepillo"];

/*
// recibe un coldback, que es una función que el FOREACH lo va ejecutar
    Foreach: recibe una función anonima la cual ejecutará tantas veces 
    como elementos tenga mi arreglo, puede recibir los siguientes
    parametros (elemento, posicion, arreglo) => {}
*/
nombre.forEach((elemento, c) =>{
    console.log(`Elemento ${elemento}, C=${c}`);
});



