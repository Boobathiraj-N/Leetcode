/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    var sum =0
    var n = mat.length;
    for(i=0;i<n;i++){
        sum += mat[i][i]
        var j = n -1 -i

        if(i !== j){
            sum += mat[i][j]
        }
    }
    return sum
};