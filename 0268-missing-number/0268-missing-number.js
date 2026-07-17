/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(i=0;i<=nums.length;i++){
        if(!nums.includes(i)){
            return i
        }
    }
};

console.log(missingNumber([3,0,1]));