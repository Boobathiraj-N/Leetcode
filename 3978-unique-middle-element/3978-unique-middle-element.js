/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    var unique = nums[Math.floor(nums.length/2)]
    if(nums.indexOf(unique) == nums.lastIndexOf(unique)){
      return true
    }
    else{
      return false
    }
    
};

console.log(isMiddleElementUnique([1,2,2]));