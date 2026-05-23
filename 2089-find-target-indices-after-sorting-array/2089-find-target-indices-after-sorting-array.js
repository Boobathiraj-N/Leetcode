/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    var res=[];
    var arr= nums.sort((a,b)=>a-b);
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            res.push(i)
        }
    }
    return res;
};
console.log(targetIndices([1,2,5,2,3],5));