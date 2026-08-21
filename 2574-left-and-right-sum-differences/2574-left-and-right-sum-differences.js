/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    var left =[]
    var right =[]
    var res =[]
    for(i=0;i<nums.length;i++){
        if(i==0){
            var sum =0;
            left.push(sum)
        }
        else{
            sum += nums[i-1]
            left.push(sum)
        }
    }

    for(i=nums.length-1;i>=0;i--){
        if(i== nums.length-1){
            var sum1 = 0;
            right.unshift(sum1)
        }
        else{
            sum1 += nums[i+1]
            right.unshift(sum1)
        }
    }

    for(i=0;i<left.length;i++){
        res.push(Math.abs(left[i]-right[i]))
    }

    return res
};

console.log(leftRightDifference([10,4,8,3]))