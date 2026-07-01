/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(arr) {
    var res=-1;
    for(i=0;i<arr.length;i++){
        if(i%10 == arr[i]){
                res =i
                break
        }
    }
    return res
};
console.log(smallestEqual([6,5,4,4,9,1,5,0,8,8,5,8,0,9,8,3,6,5,2,7,7,6,6,8,9,6,5,6,5,6,8,6,9,5,1,0,5,5]));