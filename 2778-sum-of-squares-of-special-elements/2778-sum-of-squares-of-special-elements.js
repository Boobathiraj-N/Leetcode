/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    var sum = 0
    var n = nums.length
    for(i=0;i<n;i++){
      if(n%(i+1) == 0){
        sum += nums[i]*nums[i]
      }
    }
    return sum
};
console.log(sumOfSquares([1,2,3,4]));