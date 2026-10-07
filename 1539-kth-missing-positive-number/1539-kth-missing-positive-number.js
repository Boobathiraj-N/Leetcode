/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    var missing =[]
    for(i=1;i<Infinity;i++){
      if(missing.length == k){
        return missing[k-1]
      }
      else if(!arr.includes(i)){
        missing.push(i)
      }
    }
};

console.log(findKthPositive([2,3,4,7,11],5));