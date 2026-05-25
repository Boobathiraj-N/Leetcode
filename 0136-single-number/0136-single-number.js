/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(item of nums){
        if(nums.indexOf(item)== nums.lastIndexOf(item)){
            return item
        }
    }
};
console.log(singleNumber([1]));
