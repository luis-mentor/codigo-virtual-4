/**
    Calcular el indicie de masa corporal e indicar si una persona
    se encuentra con sobrepeso, de acuerdo a la siguiente tabla

 */
/**
    15 o menos: Delgadez
    15 y 25 Peso ideal
    25 a más sobrepeso
 
    Formula del índice de masa Corporal: Peso Kg/ Altura al cuadrado (m).

    */
let peso = +prompt(`Ingrese su peso en KG`);
let altura = +prompt(`Ingrese su altura en m`);
// El promp sólo recibe datos STRING, con el "+" ya se convierte a enteros

const imc = peso / (altura * altura);
// El const 

if (imc <= 15) {
    alert(`El paciente presenta delgadez`);
} else {
    if (imc > 25) {
        alert(`El paciente está en sobrepeso`);
    } else {
        alert(`El paciente está en su peso ideal`);
    }
}





