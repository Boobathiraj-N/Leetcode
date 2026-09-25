/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    
    while(nums.length !== 1){
      var first =true;
      for(i=0;i<nums.length;i++){
        if(first){
          if(nums[i] < nums[i+1]){
            nums.splice(i+1,1)
            first=false
          }
          else{
            nums.splice(i,1)
            first = false
          }
        }

        else{
          if(nums[i] > nums[i+1]){
            nums.splice(i+1,1)
            first=true
          }
          else{
            nums.splice(i,1)
            first = true
          }
        }
        console.log(nums)
      }
    }
    return nums[0]
};

console.log(minMaxGame([1,5,4,2]));