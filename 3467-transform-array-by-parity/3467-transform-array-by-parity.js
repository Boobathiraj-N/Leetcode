/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    var arr =[];
    for(item of nums){
        if(item%2==0){
            arr.push(0);
        }
        else{
            arr.push(1);
        }
    }
    return arr.sort((a,b)=>a-b);
};
console.log(transformArray([1,5,1,4,2]));