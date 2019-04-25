function sortByHeight(a) {
    let menor, qtd = 0, array = [];

    for(j = 0; j < a.length; j++) {
        if(a[j] !== -1) {
            qtd++;
        }
    }

    while(qtd > 0) {
        for(i = 0; i < a.length; i++) {
            if(a[i] !== -1) {
                if(menor == null) {
                    menor = a[i]
                }
                else if(menor > a[i]) {
                    menor = a[i];
                }
            }
        }

        qtd--;
    }

    return qtd;
}

let a = [-1, 150, 190, 170, -1, -1, 160, 180];
// a.splice(8, 0, a[1]);
// a.splice(1, 1);
// console.log(a);
console.log(sortByHeight(a));