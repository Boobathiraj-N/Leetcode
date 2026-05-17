/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    var sum=0;
    for(item of nums){
        if(nums.indexOf(item) == nums.lastIndexOf(item)){
            sum+=item;
        }
        
    }
    return sum
};

console.log(sumOfUnique([1,2,3,2]))