/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// var limitOccurrences = function(nums, k) {
//     var obj ={}
//     var res=[]
//     for(item of nums){
//         if(obj[item]){
//             if(obj[item]<k){
//                 obj[item]++
//                 res.push(item)
//             }
//         }
//         else{
//             obj[item]=1
//             res.push(item)
//         }
//     }
//     return res
// };

var limitOccurrences = function(nums, k) {
   var lastnum = nums[0]
   var count =0
   var res=[]
   for(item of nums){
       if(lastnum == item && count < k){
           count++;
           res.push(item)
       }
       else if(lastnum != item){
           lastnum = item
           count =1;
           res.push(item)
       }
   }
    return res
};
console.log(limitOccurrences([1,2,3],1));
