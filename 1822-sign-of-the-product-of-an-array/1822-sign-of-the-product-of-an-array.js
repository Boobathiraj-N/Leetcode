/**
 * @param {number[]} nums
 * @return {number}
 */


var arraySign = function(nums) {
    if(nums.includes(0)){
        return 0
    }
    else{
        var count=0
        nums.sort()
        for(item of nums){
            if(item < 0){
                count++
            }
            else{
                break;
            }
        }
        if(count %2 == 0){
            return 1
        }
        else{
            return -1
        }
    }
};

console.log(arraySign([-1,1,-1,1,-1]))

// var arraySign = function(nums) {
//     if(nums.includes(0)){
//         return 0
//     }
//     else{
//         var count=0
        
//         for(item of nums){
//             if(item < 0){
//                 count++
//             }
//         }
//         if(count %2 == 0){
//             return 1
//         }
//         else{
//             return -1
//         }
//     }
// };

// console.log(arraySign([-1,1,-1,1,-1]))