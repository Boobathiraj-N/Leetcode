/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
  var result=0;
  for(num of nums){
    if(num %2 == 0){
      result = result | num
    }
  }
  return result
};

console.log(evenNumberBitwiseORs([1,2,3,4,5,6]));