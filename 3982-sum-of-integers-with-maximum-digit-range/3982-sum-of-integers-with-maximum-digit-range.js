/**
 * @param {number[]} nums
 * @return {number}
 */
var maxDigitRange = function(nums) {
    var arr =[];
    var sum =0
    for(item of nums){
      var digits = item.toString().split('')
      arr.push(Math.max(...digits)-Math.min(...digits))
    }
    var maximum = Math.max(...arr)
    if(arr.indexOf(maximum) == arr.lastIndexOf(maximum)){
      return nums[arr.indexOf(maximum)]
    }
    else{
      for(i=0;i<arr.length;i++){
        if(arr[i] == maximum){
          sum+= nums[i]
        }
      }
    }
    return sum
};

console.log(maxDigitRange([5724,111,350]));