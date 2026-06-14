/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    var count=0;
    for(j=0;j<nums.length;j++){
        var minimum = Math.min(...nums.filter((item)=>{
            return item !==0
        }))
        if (minimum == Infinity){
            return count
        }
        else{
            for(i=0;i<nums.length;i++){
                if(nums[i]-minimum<0){
                    nums[i]=0;
                }
                else{
                    nums[i]=nums[i]-minimum
                }
            }
            count++
        }
        
    }
    return count
    
};

console.log(minimumOperations([0]))