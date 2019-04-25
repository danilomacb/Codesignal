function allLongestStrings(inputArray) {
    let size = 0, strings = [];

    for(i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > size) {
            size = inputArray[i].length;
        }
    }

    for(j = 0; j < inputArray.length; j++) {
        if(inputArray[j].length === size) {
            strings.push(inputArray[j]);
        }
    }

    return strings;
}

inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(allLongestStrings(inputArray));