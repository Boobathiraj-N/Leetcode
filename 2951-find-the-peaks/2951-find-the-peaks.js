/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(arr) {
    var res=[];
    for(i=1;i<arr.length-1;i++){
        if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
            res.push(i)
        }
    }
    return res
};

console.log(findPeaks([4,2,1]))