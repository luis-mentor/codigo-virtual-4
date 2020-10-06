/*
    Realiza un algoritmo para calcular el sueldo semanal de un trabajador, 
    en base a las horas trabajadas, considerando que despues de las 40 horas
    cada hora se considera como excedente.
    */

let sueldoSemanal = 0;
let horasTrabajadas = 42;
let pagoPorHoras = 35;

if (horasTrabajadas > 40) {
    sueldoSemanal = (40 * pagoPorHoras) + ((horasTrabajadas - 40) * 2 * pagoPorHoras);
} else {
    sueldoSemanal = horasTrabajadas * pagoPorHoras;
}
console.log(`Total a pagar ${sueldoSemanal} por la semana cumplida`);



