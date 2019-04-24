function shapeArea(n) {
    var resultado = 0, multiplo = 0;

    if (n === 0) {
        return 0;
    }

    if(n === 1) {
        return 1;
    }

    for(i=1; i<n ;i++) {
        multiplo = 4 * i;
        resultado += multiplo;
    }

    resultado++;

    return resultado;
}

console.log(shapeArea(2));