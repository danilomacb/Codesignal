function makeArrayConsecutive2(statues) {

    var novoArray = [], tamanhoArrayOriginal = statues.length;

    var qtd = 0, l = 0;

    for(j = 0; j < tamanhoArrayOriginal; j++) {

        var menorNumero = 0, indiceMenorNumero = 0;

        for(i = 0; i < statues.length; i++){
            if(i === 0) {
                menorNumero = statues[i];
                indiceMenorNumero = i;
            }

            if(menorNumero > statues[i]) {
                menorNumero = statues[i];
                indiceMenorNumero = i;
            }
        }

        novoArray.push(menorNumero);

        statues.splice(indiceMenorNumero, 1);
    }

    for(k = 0; l < (novoArray.length - 1); k++) {
        l = k + 1;

        if(novoArray[k] !== (novoArray[l] - 1)) {
            qtd += (novoArray[l] - novoArray[k]) - 1;
        }
    }

    return qtd;
}

var array = [6, 2, 3, 8];
console.log(makeArrayConsecutive2(array));