/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    var arr = grid.join(",").split(",")
    for(i=1;i<=arr.length;i++){
        if(arr.indexOf(arr[i])!==arr.lastIndexOf(arr[i])){
        var repeat=Number(arr[i]);
        }
        if(!arr.includes(String(i))){
            var missing = i
        }
    }
    return [repeat,missing]
}

console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))