/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    if (nums.length ==1){
        return nums
    }
    else{
        var res=[]
        for(item of nums){
            if(item%2 ==0){
                res.unshift(item)
            }
            else{
                res.push(item)
            }
        }
    }
    return res;
};

console.log(sortArrayByParity([0]))