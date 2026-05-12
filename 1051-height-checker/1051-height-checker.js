/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var arr = [...heights]
    heights.sort((a,b)=>a-b)
    count=0
    for(i=0;i<=arr.length;i++){
        if(arr[i] !== heights[i]){
            count++
        }
    }
    return count
};

console.log(heightChecker([5,1,2,3,4]));