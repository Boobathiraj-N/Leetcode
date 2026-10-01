/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    var odd =0;
    var even =0;
    var res =[]
    for(item of nums){
      if(item % 2 == 0){
        even++
      }
      else{
        odd++
      }
    }
    for(num of nums){
      if(num%2 == 0){
        even--;
        res.push(odd)
      }
      else{
        odd--;
        res.push(even)
      }
    }
  return res
};


console.log(countOppositeParity([1]));