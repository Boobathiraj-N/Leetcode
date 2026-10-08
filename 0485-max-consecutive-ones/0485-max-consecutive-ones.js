/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var res =0;
      var count =0;
      for(item of nums){
            if(item == 1){
                  count++
                  if(count>=res){
                        res = count
                  }
            }
            else{
                  count=0
            }
      }
      return res
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))