/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(arr, k) {
    for(i=0;i<k;i++){
        arr.splice(arr.indexOf(Math.max(...arr)),1,Math.floor(Math.sqrt(Math.max(...arr))))
    }
    var res=0
    for(item of arr){
        res+=item
    }
    return res
};
console.log(pickGifts([1,1,1,1],4))