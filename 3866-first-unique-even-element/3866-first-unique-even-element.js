/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    for(item of nums){
      if(item % 2 == 0){
        if(nums.indexOf(item) == nums.lastIndexOf(item)){
          return item
        }
      }
    }
    return -1
};

console.log(firstUniqueEven([4,4]))