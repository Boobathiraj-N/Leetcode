/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    var count =0;
    for(item of nums){
        if(item%3 !== 0){
            count++
        }
    }
    return count
};