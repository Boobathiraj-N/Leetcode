/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

var canBeEqual = function(target, arr) {
    var obj = {}
    var obj1 = {}
    for(i=0;i<target.length;i++){
      if(!arr.includes(target[i])){
        return false
      }
      else{
        if(obj[target[i]]){
          obj[target[i]]++
        }
        else{
          obj[target[i]] = 1
        }
        if(obj1[arr[i]]){
          obj1[arr[i]]++
        }
        else{
          obj1[arr[i]] = 1
        }
      }
    }

    for(key in obj){
      if(obj[key] !== obj1[key]){
        return false
      }
    }
  
  return true
};

console.log(canBeEqual([1,2,2,3],[1,1,2,3]));


// var canBeEqual = function(target, arr) {
//     for(item of target){
//       if(!arr.includes(item)){
//         return false
//       }
//     }
//   return true
// };

// console.log(canBeEqual([1,2,3,4],[2,4,1,3]));