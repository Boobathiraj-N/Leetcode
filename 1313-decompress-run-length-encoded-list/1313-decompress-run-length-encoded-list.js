/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    var arr =[];
    for(i=0;i<nums.length;i++){
        if(i%2!==0){
            for(j=0;j<nums[i-1];j++){
            arr.push(nums[i]);
          }
        }
    }
    return arr;
};

console.log(decompressRLElist([1,1,2,3]))