function isLucky(n) {
    let half1 = 0, half2 = 0;

    for(i = 0; i < (n.toString().length / 2); i++) {
        half1 += parseInt(n.toString()[i]);
    }

    for(j = n.toString().length; j > (n.toString().length / 2); j--) {
        half2 += parseInt(n.toString()[j-1]);
    }

    return (half1 === half2) ? true : false;
}

console.log(isLucky(1230));