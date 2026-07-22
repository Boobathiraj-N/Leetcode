/**
 * @param {number[]} colors
 * @return {number}
 */

var maxDistance = function(arr) {
    for(i=arr.length-1;i>=0;i--){
        if(arr[i] !== arr[0]){
            var dist1 = i
            break
        }
    }
    for(i=0;i<arr.length;i++){
        if(arr[i]  !== arr[arr.length-1] ){
            var dist2= (arr.length-1)-i
            break
        }
    }
    return Math.max(dist1,dist2)
};

console.log(maxDistance([4,4,4,11,4,4,11,4,4,4,4,4]));

// var maxDistance = function(arr) {
//     for(i=arr.length-1;i>=0;i--){
//         if(arr[i] !== arr[0]){
//             return i
//         }
//     }
// };

// console.log(maxDistance([1,1,1,6,1,1,1]));