/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var sum=0
    for(item of nums){
        if(String(item).length%2==0){
            sum++
        }
    }
    return sum
};

console.log(findNumbers([555,901,482,1771]));