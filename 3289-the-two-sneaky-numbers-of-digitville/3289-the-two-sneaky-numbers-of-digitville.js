/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(arr) {
    var resarr=[]
    for(i=0;i<arr.length;i++){
        if(i !== arr.lastIndexOf(arr[i])){
            resarr.push(arr[i])
        }
    }
    return resarr.sort((a,b) =>a-b);
};
console.log(getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2]));