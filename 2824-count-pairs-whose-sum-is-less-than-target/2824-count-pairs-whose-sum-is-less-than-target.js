/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    var count =0 ;
    for(i=0;i<nums.length-1;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] < target){
                count++
            }
        }
    }
    return count
};

console.log(countPairs([-1,1,2,3,1],2));