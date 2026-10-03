/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  var sortedNums = [...new Set(arr)].sort((a, b) => a - b);
  // return sortedNums
  var rankMap = new Map();
      for (let i = 0; i < sortedNums.length; i++) {
          rankMap.set(sortedNums[i], i + 1); 
      }
  var res = [];
    for (let item of arr) {
        res.push(rankMap.get(item));
    }
    return res
};

console.log(arrayRankTransform([40,10,20,30]));


// var arrayRankTransform = function(arr) {
//     var nums = [...new Set(arr)]
//     nums.sort((a,b)=>a-b)
//     var res =[]
//     for(item of arr){
//       res.push(nums.indexOf(item) +1 )
//     }
//     return res
    
// };

// console.log(arrayRankTransform([10,10,10]));


// var arrayRankTransform = function(arr) {
//     var nums = [...arr]
//     nums.sort((a,b)=>a-b)
//     var res =[]
//     for(item of arr){
//       res.push(nums.indexOf(item) +1 )
//     }
//     return res
    
// };

// console.log(arrayRankTransform([10,10,10]));