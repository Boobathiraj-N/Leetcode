/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    var arr=[];
    for(item of nums){
      var sum=0;
      while(item>0){
          sum+=item%10
          item= Math.floor(item/10)
      }
      arr.push(sum)
    }
    return Math.min(...arr);
};

console.log(minElement([10,12,13,14]))