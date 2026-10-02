/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function(arr) {
    var sum =0;
    for(item of arr){
      sum+=item
    }
    for(i=3;i<=arr.length;i+=2){
      var localsum = 0;
      for(j=0;j<=arr.length-i;j++){
        var nums = arr.slice(j,i+j)
        for(item of nums){
          localsum += item
        }
      }
      sum+=localsum
    }
    return sum
};

console.log(sumOddLengthSubarrays([10,11,12]));