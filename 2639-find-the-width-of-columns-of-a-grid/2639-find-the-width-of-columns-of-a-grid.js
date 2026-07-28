/**
 * @param {number[][]} grid
 * @return {number[]}
 */

var findColumnWidth = function(grid) {
    var res=[]
    for(i=0;i<grid[0].length;i++){
        var big=0;
        for(item of grid){
            if(item[i].toString().length>big){
                big = item[i].toString().length;
            }
        }
        res.push(big)
    }
    return res
};

console.log(findColumnWidth([[-15,1,3],[15,7,12],[5,6,-2]]))