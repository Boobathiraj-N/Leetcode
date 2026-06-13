/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // let arr = nums.map((item)=>{
    //     return item*item
    // })
    var arr=[]
    for(item of nums){
        arr.push(item *item)
    }
     arr.sort((a,b)=>a-b)
     return arr
};