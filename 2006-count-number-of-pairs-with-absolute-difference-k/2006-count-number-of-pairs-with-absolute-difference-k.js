/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    var count=0;
    for(i=0;i<nums.length-1;i++){
        for(j=i+1;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j])== k){
                count++
            }
        }
    }
    return count
};

console.log(countKDifference([3,2,1,5,4],2));