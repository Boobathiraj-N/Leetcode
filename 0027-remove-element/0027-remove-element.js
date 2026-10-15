/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k; // k-oda count-ah return pannuthu
};


// var removeElement = function(nums, val) {
//     var arr = nums.filter((item)=>{
//       return item !== val
//     })
//     nums = [...arr]
//     return nums
// };

// console.log(removeElement([3,2,2,3],3));