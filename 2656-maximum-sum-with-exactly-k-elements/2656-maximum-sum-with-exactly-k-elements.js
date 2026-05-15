/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    var sum = 0;
    var max = Math.max(...nums)
    for(i=1;i<=k;i++){
        sum+=max;
        max++
    }
    return sum
};

console.log(maximizeSum([5,5,5],2));