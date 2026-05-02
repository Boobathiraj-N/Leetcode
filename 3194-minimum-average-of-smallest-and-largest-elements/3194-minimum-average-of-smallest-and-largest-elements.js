/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    var resarr=[];
    var arr=nums.sort((a,b)=>a-b)
    for(i=0;i<arr.length/2;i++){
        
        resarr.push((arr[i]+arr[nums.length-(i+1)])/2)
    }
    return Math.min(...resarr)
};

console.log(minimumAverage([7,8,3,4,15,13,4,1]))