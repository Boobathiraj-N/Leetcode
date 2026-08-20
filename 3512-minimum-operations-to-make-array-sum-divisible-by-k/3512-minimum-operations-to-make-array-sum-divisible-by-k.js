/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    var sum =0;
    for(item of nums){
        sum += item
    }
    return sum%k
};

console.log(minOperations([3,9,7],5));