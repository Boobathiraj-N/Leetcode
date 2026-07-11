/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let res=[]
    for(item of matrix){
        let count=0;
        for(num of item)
        {
            if(num == 1){
                count++;
            }
        }
        res.push(count)
    }
    return res
};


console.log(findDegrees([[0]]));