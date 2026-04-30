/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    var arr=[]
    for(i=0;i<nums.length;i++){
        var count=0;
        for(j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        arr.push(count)
    }
    return arr;
};

console.log(smallerNumbersThanCurrent([7,7,7,7]))