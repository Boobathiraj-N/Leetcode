/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var concatWithReverse = function(nums) {
//     var res =[...nums]
//     for(i=nums.length-1;i>=0;i--){
//         res.push(nums[i])
//     }
//     return res
// };

// console.log(concatWithReverse([1]));

// var concatWithReverse = function(nums) {
//     var arr =[...nums]
//     var reversed =nums.reverse()
//     return [...arr,...reversed]
// };

// console.log(concatWithReverse([1]));


var concatWithReverse = function(nums) {
    var arr =[...nums,...nums.reverse()]
    return arr
};

console.log(concatWithReverse([1,2,3]));