//sum of the both diagnol of a matrix
let sum = 0;
    for(let i = 0;i<mat.length;i++){
        for(let j = 0;j<mat[i].length;j++){
            if(i == j || i+j == mat[i].length-1){
                sum+=mat[i][j]
            }
        
        }
    }

    return sum;


   function transpose(matrix){
     let trans = Array.from(
        { length: matrix[0].length },
        () => new Array(matrix.length)
    );

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            trans[j][i] = matrix[i][j];
        }
    }

    return trans;
   }

   function flipMatrix(matrix){
        for(let i = 0;i<matrix.length;i++){
            let j = 0,k = matrix[i].length-1;
            while(j<j){
                let temp = matrix[i][j];
                matrix[i][j] = matrix[i][k];
                matrix[i][k] = temp;
                i++;j--;
            }
        }
}


var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        let j = 0;
        let k = matrix[i].length - 1;

        while (j < k) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][k];
            matrix[i][k] = temp;

            j++;
            k--;
        }
    }

};