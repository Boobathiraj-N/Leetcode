/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function(arr) {
//     if(arr.length ==1) return [-1];
//     var res=[];
//     var max =0;
//     for(i=1;i<arr.length;i++){
//         max = Math.max(...arr.slice(i))
//         res.push(max)
//     }
//     res.push(-1)
//     return res
    
// };

// console.log(replaceElements([17,18,5,4,6,1]));

var replaceElements = function(arr) {
    var maxSofar =-1;
    for(i=arr.length-1;i>=0;i--){
        var current = arr[i]
        arr[i] = maxSofar;
        maxSofar = Math.max(current, maxSofar)
    }
    return arr
};

console.log(replaceElements([17,18,5,4,6,1]));