function sortByHeight(a) {
    let array = [], l = 0;

    for(i = 0; i < a.length; i++) {
        if(a[i] !== -1) {
            array.push(a[i]);
            a[i] = 0;
        }
    }

    for(j = 0; j < array.length - 1; j++) {
        if(array[j] > array[j+1]) {
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
            j = -1;
        }
    }

    for(k = 0; k < a.length; k++) {
        if(a[k] === 0) {
            a[k] = array[l];
            l++;
        }
    }

    return a;
}

let a = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3];
console.log(sortByHeight(a));