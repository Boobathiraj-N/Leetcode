/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    var arr = nums.sort((a,b)=>a-b);
    var resarr=[]
    for(i=0;i<arr.length;i++){
        if(i !== arr.lastIndexOf(arr[i])){
            resarr.push(arr[i])
        }
    }
    return resarr;
};
console.log(getSneakyNumbers([0,3,2,1,3,2]));