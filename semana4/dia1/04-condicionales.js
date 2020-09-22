/**
 * OPERADORES LOGICOS
 * && AND Y
 * || or O
 * ! not negación
 * 
 * 
 */

/* El ejercicio del mayor de 3 números */
const nro1 = 50;
const nro2 = 53;
const nro3 = 40;

if (nro1>nro2 && nro1> nro3){
    console.log("El numero mayor es " + nro1);
} else {
    if(nro2>nro1 && nro2>nro3){
        console.log("El numero mayor es "+ nro2);
    } else{
        console.log("El numero mayor es "+ nro3);
    }
}