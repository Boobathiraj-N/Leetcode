/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    var sindex = null;
    for(i=0;i<nums.length;i++){
        if(i==0){
            var max = nums[i]
        }
        else{
            if(nums[i]>max){
                max = nums[i]
            }
        }
        
        if(i !== nums.length-1){
            var min = Math.min(...nums.slice(i)) 
        }
        else{
            min = nums[i]
        }
        
        if(max - min <= k){
            return i
        }
        
    }
    return -1
};

console.log(firstStableIndex([5,0,1,4],3))