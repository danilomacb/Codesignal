function reverseInParentheses(inputString) {
    let newString = "";

    for(i = inputString.length-1; i >= 0; i--) {
        if(inputString[i] === "(" ) {
            newString += inputString[i];
        }
    }

    return newString;
}

function inverte() {

}


let inputString = "(bar)";
// inputString =  inputString.replace(inputString[0],inputString[inputString.length-1]);
// console.log(inputString);
console.log(reverseInParentheses(inputString));