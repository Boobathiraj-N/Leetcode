/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(arr) {
    var res=[]
    for(i=0;i<arr[0].length;i++){
        var dummy=[]
        for(j=0;j<arr.length;j++){
            dummy.push(arr[j][i])
        }
        res.push(dummy)
    }
    return res;
};
console.log(transpose([[1,2,3],[4,5,6]]));