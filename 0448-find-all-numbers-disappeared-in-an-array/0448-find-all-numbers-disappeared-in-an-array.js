/**
 * @param {number[]} nums
 * @return {number[]}
 */


var findDisappearedNumbers = function(nums) {
    var res =[]
    var numSet = new Set(nums)
    for(i=1;i<=nums.length;i++){
        if(!numSet.has(i)){
            res.push(i)
        }
    }
    return res
};
console.log(findDisappearedNumbers([1,1]));

// var findDisappearedNumbers = function(nums) {
//     var res =[]
//     for(i=1;i<=nums.length;i++){
//         if(!nums.includes(i)){
//             res.push(i)
//         }
//     }
//     return res
// };
// console.log(findDisappearedNumbers([1,1]));