/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function(nums, k) {
    var sum =0;
    for(i=0;i<nums.length;i++){
        if(i-k >= 0 && nums[i] > nums[i-k] || i-k<0){
            if(i+k < nums.length && nums[i]>nums[i+k] || i+k >= nums.length){
                sum += nums[i]
            }
        }
    }
    return sum
};

console.log(sumOfGoodNumbers([2,1],1))