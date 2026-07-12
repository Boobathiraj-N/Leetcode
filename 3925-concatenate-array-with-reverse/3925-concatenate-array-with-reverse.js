/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    var res =[...nums]
    for(i=nums.length-1;i>=0;i--){
        res.push(nums[i])
    }
    return res
};

console.log(concatWithReverse([1]));