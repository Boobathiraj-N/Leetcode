/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    nums.sort((a,b)=> a-b)
    var nums1=[]
    var nums2=[]
    for(item of nums){
      
      if(!nums1.includes(item) && nums1.length <= nums2.length){
        nums1.push(item)
      }
      else if(!nums2.includes(item) && nums2.length <= nums1.length){
        nums2.push(item)
      }
      else if(nums1.includes(item) && nums2.includes(item)){
        return false
      }
    }
    if(nums.length/2 == nums1.length && nums1.length == nums2.length){
      return true
    }
    else{
      return false
    }
};

console.log(isPossibleToSplit([8,9,8,5,9,3,3,1,2,1]));



// var isPossibleToSplit = function(nums) {
//     const n = nums.length
//     var nums1=[]
//     var nums2=[]
//     for(i=0;i<n;i++){
      
//       if(!nums1.includes(nums[i]) && i%2 == 0){
//         nums1.push(nums[i])
//       }
//       else if(i%2 !==0 && !nums2.includes(nums[i])){
//         nums2.push(nums[i])
//       }
//     }

//     if(n/2 == nums1.length && nums1.length == nums2.length){
//       return true
//     }
//     else{
//       return false
//     }
// };

// console.log(isPossibleToSplit([1,1,1,1]));