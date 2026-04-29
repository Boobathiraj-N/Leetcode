/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var arr=[];
    for(i=0;i<n;i++){
        arr.push(nums[i])
        arr.push(nums[i+n])
    }
    return arr
};
console.log(shuffle([1,2,3,4,4,3,2,1],4))