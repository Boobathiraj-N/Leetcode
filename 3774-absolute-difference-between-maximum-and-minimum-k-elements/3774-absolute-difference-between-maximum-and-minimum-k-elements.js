/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    var sumMax=0;
    var sumMin=0;
    var arr = nums.sort((a,b)=>b-a);
    for(i=0;i<k;i++){
        sumMax += arr[i]
        sumMin += arr[arr.length -(i+1)]
    }
    return sumMax-sumMin
};

console.log(absDifference([1,2],1));