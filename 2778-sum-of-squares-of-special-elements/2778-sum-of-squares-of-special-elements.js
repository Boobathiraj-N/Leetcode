/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    var sum = 0
    for(i=0;i<nums.length;i++){
      if(nums.length%(i+1) == 0){
        sum += nums[i]*nums[i]
      }
    }
    return sum
};
console.log(sumOfSquares([1,2,3,4]));