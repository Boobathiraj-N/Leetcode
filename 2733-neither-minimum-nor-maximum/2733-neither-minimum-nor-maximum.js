/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length<=2){
        return -1
    }
    else{
        var arr = nums.sort((a,b)=>a-b)
        return arr[1]
    }
    
};
console.log(findNonMinOrMax([2,1,3]))