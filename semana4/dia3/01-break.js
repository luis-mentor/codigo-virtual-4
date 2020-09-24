/**
    La sentencia Break: Determina el fin de una estructura
    iterativa (for, while, do-while, switch)
    ¿Cuando? todo depende de la logica que se utilice
 */
/**
 Algoritmo que recorre un arreglo hasta que encuentra un numero 0,
 entonces el algoritmo se detiene
 */

const edades = [20, 12, 2, 0, 58, 25, 95, 3];
for (let c = 0; c < edades.length; c++) {
    if(edades[c]===0){
        break;
    }
    console.log(edades[c]);
}