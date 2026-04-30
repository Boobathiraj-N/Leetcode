/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var res=0;
    var arr=[];
    for(item of nums){
        arr.push(res+=item)
    }
    return arr;
};

console.log(runningSum([1,1,1,1,1]))