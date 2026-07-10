/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    var arr = [...nums1,...nums2].sort((a,b)=>a[0]-b[0])
    for(i=0;i<arr.length-1;i++){
        if(arr[i][0]== arr[i+1][0]){
            arr[i][1]=arr[i][1]+arr[i+1][1]
            arr.splice(i+1,1)
        }
    }
    return arr
};

console.log(mergeArrays([[2,4],[3,6],[5,5]],[[1,3],[4,3]]))