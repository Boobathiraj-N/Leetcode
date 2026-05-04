/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    var count1=0;
    var count2=0;
    for(item of nums1){
        if(nums2.includes(item)){
            count1++
        }
    }
    for(item of nums2){
        if(nums1.includes(item)){
            count2++
        }
    }
    return [count1,count2]
};

console.log(findIntersectionValues([2,3,2],[1,2]))