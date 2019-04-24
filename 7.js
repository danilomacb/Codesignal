function almostIncreasingSequence(sequence) {
    let invalidItemsCount = 0;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            invalidItemsCount++;
            if (invalidItemsCount > 1) return false;
            if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
        }
    }

    return true;
}

let array = [1, 3, 2, 1];
console.log(almostIncreasingSequence(array));