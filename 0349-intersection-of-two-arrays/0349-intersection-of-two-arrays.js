/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var arr=[]
    if(nums1.length<nums2.length){
        for(item of nums1){
            if(nums2.includes(item) && !arr.includes(item)){
                arr.push(item)
            }
        }
    }
    else{
        for(item of nums2){
            if(nums1.includes(item) && !arr.includes(item)){
                arr.push(item)
            }
        }
    }
    return arr;
};
console.log(intersection([4,9,5],[9,4,9,8,4]))