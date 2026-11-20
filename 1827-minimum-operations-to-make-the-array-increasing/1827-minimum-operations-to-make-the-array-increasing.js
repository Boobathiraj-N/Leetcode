/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    var count=0
    for(i=0;i<nums.length-1;i++){
      if(nums[i]>=nums[i+1]){
        var temp = (nums[i]+1) - nums[i+1]
        count += temp
        nums[i+1] = nums[i]+1
        
      }
    }
  return count
};

console.log(minOperations([1,5,2,4,1]));