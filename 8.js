function matrixElementsSum(matrix) {
    let result = 0;

    for(i = 0; i < matrix.length; i++) {
        for(j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] !== 0) {
                if(i === 0) {
                    result += matrix[i][j];
                }
            }
        }
    }

    return result;
}

let matrix = [[1,1,1,0], 
              [0,5,0,1], 
              [2,1,3,10]];

console.log(matrixElementsSum(matrix));