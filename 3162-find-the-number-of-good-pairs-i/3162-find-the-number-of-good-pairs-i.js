/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    var count=0;
    for(item2 of nums2){
        for(item1 of nums1){
            if(item1%(item2*k) == 0 && item1 >= item2*k){
                count++
            }
        }
    }
    return count
};

console.log(numberOfPairs([1,2,4,12],[2,4],3));