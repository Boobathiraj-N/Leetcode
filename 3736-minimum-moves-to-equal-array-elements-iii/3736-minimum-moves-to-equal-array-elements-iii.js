/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var count =0;
    var max = Math.max(...nums)
    for(item of nums){
        if(max - item !== 0){
            count += max-item
        }
    }
    return count
};

console.log(minMoves([2,1,3]));