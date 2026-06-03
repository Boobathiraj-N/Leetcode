/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(i=0;i<=nums.length-1;i++){
        if(nums[i] !== nums[i+1]){
            continue;
        }
        else{
            nums[i]=nums[i]*2
            nums[i+1]=0
        }
    }
    var res=[]
    var res1=[]
    for(item of nums){
        if(item !== 0){
            res.push(item)
        }
        else{
            res1.push(item)
        }
    }
    return [...res,...res1]
};

console.log(applyOperations([1,2,2,1,1,0]));