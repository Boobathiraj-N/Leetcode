/**
 * @param {number[]} nums
 * @return {number}
 */

var countPartitions = function(nums) {
    var result = 0;
    for(i=0;i<nums.length-1;i++){
        var arr1= nums.slice(0,i+1)
        var arr2= nums.slice(i+1)
        var sum1=0;
        var sum2=0;
        for(item of arr1){
            sum1+=item;
        }
        for(item of arr2){
            sum2+=item;
        }
        if((sum1+sum2)%2==0){
            result++
        }
    }
    return result
};
console.log(countPartitions([2,4,6,8]))