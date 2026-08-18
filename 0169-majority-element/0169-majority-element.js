/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var obj={}
    var max =0 
    for(item of nums){
        if(obj[item]){
            obj[item]++
        }
        else{
            obj[item]=1
        }
    }

    for(key in obj){
        if(obj[key] > max) {
            max = obj[key] 
            var res =+key
        }
    }
    return res
};

console.log(majorityElement([3,2,3]))