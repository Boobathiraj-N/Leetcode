/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var newarr = [...new Set(nums)]
    return newarr.length !== nums.length? true:false
};

console.log(containsDuplicate([1,2,3,1]));