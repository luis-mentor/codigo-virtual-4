/**
    La sentencia CONTINUE interrumpe la iteración que se 
    encuentra desarrollando la estructura repetitiva, sin
    embargo hace que se continue con la siguiente iteración.
    ¿Cuando? todo depende de la logica que se utilice
 */
/**
 Algoritmo que imprime los números diferentes de CERO
 */

const edades = [20, 12, 2, 0, 58, 25, 95, 3];
for (let c = 0; c < edades.length; c++) {
    if(edades[c]===0){
        continue;
    }
    console.log(edades[c]);
}



