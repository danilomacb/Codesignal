function commonCharacterCount(s1, s2) {
    let result = 0;

    for(i = 0; i < s1.length; i++) {
        for(j = 0; j < s2.length; j++) {
            if(s1[i] === s2[j]) {
                result++;
                s2 = s2.substring(0, j) + s2.substring(j + 1, s2.length);
                console.log(s2);
                break;
            }
        }
    }

    return result;
}

let s1 = "aabcc", s2 = "adcaa";

console.log(commonCharacterCount(s1, s2));