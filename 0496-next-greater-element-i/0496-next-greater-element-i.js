/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var arr =[]
    for(item of nums1){
        var res=-1;
        for(i=nums2.indexOf(item);i<nums2.length;i++){
            if(nums2[i]>item){
                res=nums2[i]
                break
            }
        }
        arr.push(res)
    }
    return arr;
};

console.log(nextGreaterElement([2,4],[1,2,3,4]))