function checkPalindrome(inputString) {
    var segundaString = "";

    for(i = inputString.length; i >= 0; i--) {
        segundaString += inputString.charAt(i);
    }

    if(inputString === segundaString) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkPalindrome("aabaa"));