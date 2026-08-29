/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var count =0;
    for(i=0;i<nums.length-1;i++){
        if(nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
            continue
        }
        else{
            for(j=i+1;j<nums.length;j++){
                if(nums[i] == nums[j]){
                    count++
                }
            }
        }
    }
    return count
};


console.log(numIdenticalPairs([1,2,3,1,1,3]))