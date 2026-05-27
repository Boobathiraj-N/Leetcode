/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    var arr = [...new Set(nums)].sort((a,b)=>b-a)
    return arr.slice(0,k);
};

console.log(maxKDistinct([1,1,1,2,2,2],6))