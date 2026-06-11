/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    var positive =0;
    var negative=0;
    for(item of nums){
        if(item<0){
            negative++;
        }
        else if (item!==0){
            positive++
        }
    }
    return negative>=positive? negative:positive;
};

console.log(maximumCount([-3,-2,-1,0,0,1,2]));