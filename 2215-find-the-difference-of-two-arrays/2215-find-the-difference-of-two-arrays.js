/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    var ans = [[],[]];
    for(i=0;i<nums1.length;i++){
        if(!nums2.includes(nums1[i]) && !ans[0].includes(nums1[i])){
            ans[0].push(nums1[i])
        }
    }
    for(i=0;i<nums2.length;i++){
        if(!nums1.includes(nums2[i]) && !ans[1].includes(nums2[i])  ){
            ans[1].push(nums2[i])
        }
    }
    return ans
};

console.log(findDifference([-73],[-66,9,-54,-32,94,11]))