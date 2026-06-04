/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a,b)=>b-a);
    var flag=-1;
    for(i=0;i<nums.length-1;i++){
        if(nums.includes(-nums[i])){
            flag=nums[i]
            break;
        }
    }
    return flag
};

console.log(findMaxK([-1,2,-3,3]))