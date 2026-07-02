/**
 * @param {number[]} nums
 * @return {number}
 */

var maximizeExpressionOfThree = function(nums) {
    var arr = nums.sort((a,b)=>b-a)
    return (arr[0]+arr[1])-arr[arr.length-1]
};

console.log(maximizeExpressionOfThree([-2,0,5,-2,4]));