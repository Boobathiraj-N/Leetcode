/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    var arr=[];
    for(item of nums){
        var str =String(item)
        var sum=0;
        for(char of str){
            if(char !==0){
                sum+=Number(char)
            }
        }
        arr.push(sum)
    }
    return Math.min(...arr);
};

console.log(minElement([10,12,13,14]))