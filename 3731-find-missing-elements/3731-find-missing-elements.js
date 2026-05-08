/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    var max=Math.max(...nums)
    var missing=[]
    for(i=Math.min(...nums);i<=max;i++){
        if(!nums.includes(i)){
            missing.push(i)
        }
        
    }
    return missing
};
console.log(findMissingElements([1,4,2,5]))