/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    var count=0;
    for(item of arr){
        if(arr.indexOf(item)==arr.lastIndexOf(item)){
            count++;
            if(count==k){
                return item;
            }
        }
    }
    return ""
};
console.log(kthDistinct(["a","b","a"],3))