/**
 * @param {number[]} nums
 * @return {number}
 */


var countHillValley = function(nums) {
    var arr = []
    for(i=1;i<nums.length-1;i++){
        if(nums[i]!=nums[i+1]){
            arr.push(nums[i])
        }
    }
    arr.unshift(nums[0])
    arr.push(nums[nums.length-1])
    
    // var arr = [...new Set(nums)]
    var count =0;
    for(i=1;i<arr.length-1;i++){
        if(arr[i]<arr[i-1] && arr[i]<arr[i+1] || arr[i]>arr[i-1] && arr[i]>arr[i+1])
        {
            count++
        }
    }
    return count
};
console.log(countHillValley([5,7,7,1,7]));

// var countHillValley = function(nums) {
//     var arr = [...new Set(nums)]
//     var count =0;
//     for(i=1;i<arr.length-1;i++){
//         if(arr[i]<arr[i-1] && arr[i]<arr[i+1] || arr[i]>arr[i-1] && arr[i]>arr[i+1])
//         {
//             count++
//         }
//     }
//     return count
// };
// console.log(countHillValley([6,6,5,5,4,1]));