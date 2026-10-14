/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    var increasing = false
    for(i=0;i<nums.length-1;i++){
      if(nums[i] !== nums[i+1] && nums[i] < nums[i+1]){
        increasing = true
        break
      }
      if(i == nums.length-2 && nums[i] == nums){
          return true
      }
    }

    if(increasing){
      for(j=0;j<nums.length-1;j++){
        if(nums[j] > nums[j+1] && nums[j] !== nums[j+1]){
          return false
        }
      }
      return true
    }
    else{
      for(k=0;k<nums.length-1;k++ ){
        if(nums[k] < nums[k+1] && nums[k] !== nums[k+1]){
          return false
        }
      }
      return true
    }
};

console.log(isMonotonic([5,4,3,2]));