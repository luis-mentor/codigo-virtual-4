/**
 * OPERADORES LOGICOS
 * && AND Y
 * || or O
 * ! not negación
 */

/* El ejercicio del mayor de 3 números */
const nro1 = 24;
const nro2 = 40;
const nro3 = 35;

if (nro1>nro2 && nro1> nro3){
    console.log("El numero mayor es " + nro1);
} else {
    if(nro2>nro1 && nro2>nro3){
        console.log("El numero mayor es "+ nro2);
    } else{
        console.log("El numero mayor es "+ nro3);
    }
}