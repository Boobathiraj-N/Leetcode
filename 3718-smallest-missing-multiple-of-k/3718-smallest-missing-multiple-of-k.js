/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    for(i=k;i<k*100000;i+=k){
      if(!nums.includes(i)){
        return i
      }
    }
};


console.log(missingMultiple([8,2,3,4,6],2));