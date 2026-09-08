/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    var arr =[]
    for(i=0;i<nums.length;i++){
      var obj1 = new Set(nums.slice(0,i+1))
      var obj2 = new Set(nums.slice(i+1))
      arr.push(obj1.size - obj2.size)
    }
  return arr
};


console.log(distinctDifferenceArray([1,2,3,4,5]));