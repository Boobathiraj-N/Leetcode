/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function(n, trust) {
    // Array initialized with 0 for people 1 to n
    const trustScores = new Array(n + 1).fill(0);

    // Calculate net trust score
    for (let [a, b] of trust) {
        trustScores[a]--; // Out-degree: person 'a' trusts someone, lose 1 point
        trustScores[b]++; // In-degree: person 'b' is trusted, gain 1 point
    }

    // Find the person with a score of n - 1
    for (let i = 1; i <= n; i++) {
        if (trustScores[i] === n - 1) {
            return i;
        }
    }

    return -1;
  
};

console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));

// var findJudge = function(n, trust) {
//     var obj={}
//     for(item of trust){
//       if(obj[item[1]]){
//         obj[item[1]]++
//       }
//       else{
//         obj[item[1]] = 1
//       }
//     }
//     for(key in obj){
//       if(obj[key] == (n-1)){
//         var ans = +key 
//       }
//     }
//     for(item of trust){
//         if(item[0] == ans){
//             return -1
//         }
//     }
//     return ans
// };
// console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));

// var findJudge = function(n, trust) {
//     var obj={}
//     for(item of trust){
//       if(obj[item[1]]){
//         obj[item[1]]++
//       }
//       else{
//         obj[item[1]] = 1
//       }
//     }
//     if(Object.keys(obj).length > 1){
//       return -1
//     }
//     else{
//       return +Object.keys(obj)[0]
//     }
// };
// console.log(findJudge(5, [[1,3],[2,3],[4,3],[5,3]]));