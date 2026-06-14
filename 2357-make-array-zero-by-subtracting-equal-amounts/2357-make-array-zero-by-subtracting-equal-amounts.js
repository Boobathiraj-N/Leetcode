/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    var count=0;
    for(j=0;j<nums.length;j++){
        var str = nums.join("")
        if(/[1-9]/.test(str)){
            var minimum = Math.min(...nums.filter((item)=>{
                return item !== 0
            }))
            
            for(i=0;i<nums.length;i++){
                if(nums[i]-minimum<0){
                    nums[i]=0;
                }
                else{
                    nums[i]=nums[i]-minimum
                }
            }
            count++
        }
        else{
            break;
        }
    }
    return count
    
};

console.log(minimumOperations([1,5,0,3,5]))




// var minimumOperations = function(nums) {
//     var count=0;
//     for(j=0;j<nums.length;j++){
//         var minimum = Math.min(...nums.filter((item)=>{
//             return item !==0
//         }))
//         if (minimum == Infinity){
//             return count
//         }
//         else{
//             for(i=0;i<nums.length;i++){
//                 if(nums[i]-minimum<0){
//                     nums[i]=0;
//                 }
//                 else{
//                     nums[i]=nums[i]-minimum
//                 }
//             }
//             count++
//         }
        
//     }
//     return count
    
// };

// console.log(minimumOperations([0]))