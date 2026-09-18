/**
 * @param {number[]} nums
 * @return {number}
 */

var dominantIndices = function(nums) {
    var count =0;
    var sum =0;
    for(item of nums){
      sum += item;
    }
    for(i=0;i<nums.length;i++){
      sum -= nums[i]
      if(i !== nums.length-1){
          if(nums[i] > (sum/(nums.length-(i+1)))){
          count++
        }
      }
    }
    return count
};
console.log(dominantIndices([4,1,2]))


// var dominantIndices = function(arr) {
//     var count =0;
//     for(i=0;i<arr.length;i++){
//       if(arr[i+1] && arr[i+2]){
//         if(arr[i]>(arr[i+1]+arr[i+2])/2){
//           count++
//         }
//       }
//       else if(!arr[i+2]){
//         if(arr[i]>arr[i+1]){
//           count++
//         }
//       }
//     }
//     return count
// };
// console.log(dominantIndices([5,4,3]))