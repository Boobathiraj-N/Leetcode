/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */

var twoOutOfThree = function(nums1, nums2, nums3) {
    var arr1=[...new Set(nums1)];
    var arr2=[...new Set(nums2)];
    var arr3=[...new Set(nums3)];
    var res =[]
    
    for(item of arr1)
    {
        if((arr2.includes(item) || arr3.includes(item)) && !res.includes(item)){
            res.push(item)
        }
    }    
    for(item of arr2){
        if((arr1.includes(item) || arr3.includes(item)) && !res.includes(item)){
                res.push(item)
            }
    }
    for(item of arr3){
        if((arr1.includes(item) || arr2.includes(item)) && !res.includes(item)){
                res.push(item)
            }
    }
    return res

};

console.log(twoOutOfThree([3,1],[2,3],[1,2]))