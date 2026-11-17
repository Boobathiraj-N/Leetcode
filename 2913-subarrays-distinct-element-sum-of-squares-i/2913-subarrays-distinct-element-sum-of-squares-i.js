/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    var sum = nums.length
    for(i=2;i<=nums.length;i++){
      for(j=0;j<=nums.length-i;j++){
        var temp = new Set(nums.slice(j,i+j)).size 
        sum += (temp * temp)
      }
    }
    return sum
};

console.log(sumCounts([1, 2, 1]))