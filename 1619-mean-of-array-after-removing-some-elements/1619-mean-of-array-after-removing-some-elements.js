/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b)=>a-b)
    var fp = arr.length * 0.05
    arr.splice(0,fp)
    arr.splice(-fp,fp)
    var sum =0;
    
    for(item of arr){
        sum+=item
    }
    return +(sum/arr.length).toFixed(5)
};

console.log(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]));