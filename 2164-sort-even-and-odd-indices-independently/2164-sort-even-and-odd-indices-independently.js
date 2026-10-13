/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    var even =[]
    var odd =[]
    var res =[]
    for(i=0;i<nums.length;i++){
      if(i%2 == 0){
        even.push(nums[i])
      }
      else{
        odd.push(nums[i])
      }
    }
    even.sort((a,b)=>a-b)
    odd.sort((a,b)=>b-a)
    for(j=0;j<even.length;j++){
        if(even[j]){
            res.push(even[j])
        }
        if(odd[j]){
            res.push(odd[j])
        }
    }
    return res
};

console.log(sortEvenOdd([4,1,2,3]));