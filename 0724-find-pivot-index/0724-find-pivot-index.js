/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
};

var pivotIndex = function(nums) {
    var totalsum =0
    for(item of nums){
      totalsum += item 
    }
    var sum =0;
    var leftsum =0
    var rightsum =0
    for(i=0;i<nums.length;i++){
      leftsum += nums[i-1] || 0
      sum += nums[i]
      rightsum = totalsum - sum
      // console.log(`${i} leftsum = ${leftsum} sum = ${sum} rightsum = ${rightsum}`)
      if(leftsum == rightsum){
        return i
      }
    }
    return -1
};

console.log(pivotIndex([2,3,-1,8,4]))
