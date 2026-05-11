/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    var arr = nums.join("").split("")
    var newarr = arr.map((item)=>{
        return Number(item)
    })
    return newarr
};
console.log(separateDigits([13,25,83,77]))