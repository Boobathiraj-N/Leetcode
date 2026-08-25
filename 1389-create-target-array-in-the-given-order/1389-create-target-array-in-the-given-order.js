/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    var res = []
    for(i=0;i<nums.length;i++){
            res.splice(index[i],0,nums[i])
        }
    return res
};

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))