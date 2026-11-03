/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var minOperations = function(nums, k) {
    var count =0;
    var arr = []
    for(i=1;i<=k;i++){
      arr.push(i)
    }

    for(j=nums.length-1;j>=0;j--){
      
      if(arr.length==0){
        return count
      }
      else if(arr.includes(nums[j])){
        arr.splice(arr.indexOf(nums[j]),1)
      }
      count++
    }
    return count
    
};

console.log(minOperations([3,1,5,4,2],5));