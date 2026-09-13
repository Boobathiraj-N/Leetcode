/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    var count =0;
    var obj = new Set(nums)
    while(nums.length != obj.size){
      if(nums.length == 0){
        break;
      }
      else{
        count++
        nums.splice(0,3)
        obj = new Set(nums)
      }
    }
    return count
};

console.log(minimumOperations([1,2,3,4,2,3,3,5,7]));