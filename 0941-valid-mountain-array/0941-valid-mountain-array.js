/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length <= 2) return false
    var max = Math.max(...arr)
    var ascArr = arr.slice(0,arr.indexOf(max)+1)
    var desArr = arr.slice(arr.indexOf(max))
    if(ascArr.length == 1) return false
    if(desArr.length == 1) return false
    for(i=0;i<ascArr.length-1;i++){
      if(ascArr[i] <= ascArr[i+1]){
        if(ascArr[i] == ascArr[i+1]){
          return false
        }
      }
      else{
        return false
      }
    }

    for(j=0;j<desArr.length-1;j++){
      if(desArr[j] >= desArr[j+1]){
        if(desArr[j] == desArr[j+1]){
          return false
        }
      }
      else{
        return false
      }
    }
    return true
};



// var validMountainArray = function(arr) {
//     if(arr.length <=2){
//         return false
//     }
//     if(arr.length == 3){
//       if(arr[0]<arr[1] && arr[2]<arr[1]){
//         return true
//       }
//     }
//     var up =0
//     var down = 0;
//     for(i=0;i<arr.length-1;i++){
//       if(down == 0){
//         if(arr[i]<=arr[i+1]){
//           if(arr[i] == arr[i+1]){
//             return false
//           }
//         }
//         else{
//           down =1
//         }
//       }

//         else{
//           if(arr[i]>=arr[i+1]){
//             if(arr[i] == arr[i+1]){
//               return false
//             }
//             else if (up == 0){
//                 up=1
//             }
//           }
//           else{
//               return false
//           }
          
//         }
//       }
//     if(up == 1 && down == 1){
//         return true
//     }
//     else{
//         return false
//     }
// };

// console.log(validMountainArray([1,3,2]));


// var validMountainArray = function(arr) {
//     if(arr.length <=2){
//         return false
//     }
//     var up =0
//     var down = 0;
//     for(i=0;i<arr.length-1;i++){
//       if(down == 0){
//         if(arr[i]<=arr[i+1]){
//           if(arr[i] == arr[i+1]){
//             return false
//           }
//         }
//         else{
//           down =1
//         }
//       }

//         else{
//           if(arr[i]>=arr[i+1]){
//             if(arr[i] == arr[i+1]){
//               return false
//             }
//             else if (up == 0){
//                 up=1
//             }
//           }
//           else{
//               return false
//           }
          
//         }
//       }
//     if(up == 1 && down == 1){
//         return true
//     }
//     else{
//         return false
//     }
// };

// console.log(validMountainArray([0,3,2,1]));