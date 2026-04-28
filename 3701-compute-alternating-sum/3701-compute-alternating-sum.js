/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    var res=0;
    for(i=0;i<nums.length;i++){
        if(i%2==0){
            res +=nums[i];
        }
        else{
            res-=nums[i];
        }
    }
    return res;
};
console.log(alternatingSum([1,3,5,7]));