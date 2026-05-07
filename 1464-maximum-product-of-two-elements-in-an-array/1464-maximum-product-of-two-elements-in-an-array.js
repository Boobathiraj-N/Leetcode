/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var a = Math.max(...nums)
    nums.splice(nums.indexOf(a),1)
    return (Math.max(...nums)-1)*(a-1)
};

console.log(maxProduct([1,5,4,5]))