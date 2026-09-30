/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var last =0
  for(i=0;i<nums.length;i++){
    if(nums[i] !== 0){
      [nums[last],nums[i]] = [nums[i],nums[last]]
      last++
    }
  }
  return nums
};

console.log(moveZeroes([0,1,0,3,12]));



// var moveZeroes = function(nums) {
    
//     for(i=0;i<nums.length;i++){
//       if(nums[i] == 0){
//         nums.splice(i,1)
//         nums.push(0)
//       }
//     }
//     return nums
// };

// console.log(moveZeroes([0,1,0,3,12]));