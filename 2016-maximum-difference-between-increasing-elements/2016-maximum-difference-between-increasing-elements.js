/**
 * @param {number[]} nums
 * @return {number}
 */


var maximumDifference = function(nums) {
    let minVal = nums[0]; 
    let maxDiff = -1;     

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > minVal) {
            maxDiff = Math.max(maxDiff, nums[i] - minVal);
        } 
        else {
            minVal = nums[i];
        }
    }

    return maxDiff;
};

// var maximumDifference = function(nums) {
//     var min = Math.min(...nums)
//     var minIndex = nums.indexOf(min)
//     if(minIndex == nums.length-1){
//         return -1
//     }
//     else{
//         var max = Math.max(...nums.slice(minIndex+1))
//     }
//     return max-min
// };

// console.log(maximumDifference([9,4,3,2]))