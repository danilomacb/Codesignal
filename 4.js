function adjacentElementsProduct(inputArray) {

    var numeroMaior = 0, numeroAtual = 0;

    for(i=0; i < inputArray.length; i++) {

        if((i + 1) >= inputArray.length) {
            break;
        }

        numeroAtual = inputArray[i] * inputArray[i+1];

        if(numeroMaior === 0) {
            numeroMaior = numeroAtual;
        }

        if(numeroAtual > numeroMaior) {
            numeroMaior = numeroAtual;
        }
    }

    return numeroMaior;
}

var array = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(array));