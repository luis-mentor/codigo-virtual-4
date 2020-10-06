const areaCirculo = (r) => {
    const PI = 3.1416;
    //Aplicamos funcion dentro de otra función
    const cuadrado = (n) => {
        return n * n;
    }
    return PI * cuadrado(r);
}
console.log(areaCirculo(15));
