/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    var small =[]
    var big =[]
    var res =[]
    for(item of nums){
        if(item  == pivot){
            res.push(item)
        }
        else if(item < pivot){
            small.push(item)
        }
        else{
            big.push(item)
        }
    }
    res.push(...big)
    res.unshift(...small)
    return res
};

console.log(pivotArray([9,12,5,10,14,3,10],10))