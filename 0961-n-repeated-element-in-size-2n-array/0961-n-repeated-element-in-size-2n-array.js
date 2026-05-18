/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    for(item of nums){
        if(nums.indexOf(item)!= nums.lastIndexOf(item))
        {
            return item;
        }
    }
};
console.log(repeatedNTimes([2,1,2,5,3,2]));