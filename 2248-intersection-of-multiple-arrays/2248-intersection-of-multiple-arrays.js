/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    var res =[]
    for(item of nums[0]){
        var isValid = true
        for(j=1;j<nums.length;j++){
            if(!nums[j].includes(item)){
                isValid =false
                break
            }
        }
        if(isValid){
            res.push(item)
        }
    }
    return res.sort((a,b)=>a-b)
};

console.log(intersection([[1,2,3],[4,5,6]]));