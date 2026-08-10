/**
 * @param {number[]} nums
 * @return {boolean}
 */


var findSubarrays = function(nums) {
    var sumArr = []
    for(i=0;i<nums.length-1;i++){
        if(sumArr.includes(nums[i]+nums[i+1])){
            return true
        }
        else{
            sumArr.push(nums[i]+nums[i+1])
        }
        
    }
    return false
};
console.log(findSubarrays([0,0,0]));

// var findSubarrays = function(nums) {
//     var obj ={}
//     for(i=0;i<nums.length-1;i++){
//         if(obj[nums[i]+nums[i+1]]){
//             obj[nums[i]+nums[i+1]]++
//         }
//         else{
//             obj[nums[i]+nums[i+1]] = 1
//         }
//     }
//     var objarr = Object.values(obj)
//     for(i=0;i<objarr.length;i++){
//         if(i==0){
//             var res = objarr[i]
//         }
//         else{
//             if(objarr[i] !== res){
//                 return false
//             }
//         }
//     }
//     return true
// };
// console.log(findSubarrays([0,0,0]));

// var findSubarrays = function(nums) {
//     if(nums.length <= 2){
//         return false
//     }
//     for(i=0;i<nums.length-1;i++){
//         if(i == 0){
//             var count = nums[0] + nums[1]
//         }
//         else{
//             if(nums[i]+nums[i+1] != count){
//                 return false
//             }
//         }
//     }
//     return true
// };
// console.log(findSubarrays([0,0,0]));