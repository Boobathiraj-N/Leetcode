/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    for(i=0;i<nums.length;i++){
      var arr = [...nums]
      arr.splice(i,1)
            // console.log(arr)
      var flag =0;
      for(j=0;j<arr.length-1;j++){
        if(arr[j]>=arr[j+1]){
          flag =1
          break
        }
      }
      if(flag == 0){
        return true
      }
    }
    return false
};

console.log(canBeIncreasing([1,1,1]));