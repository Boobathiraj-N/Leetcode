/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = nums.map((item)=>{
        return item*item
    })
    return arr.sort((a,b)=>a-b)
};