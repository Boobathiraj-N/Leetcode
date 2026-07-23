/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */

var checkDistances = function(s, distance) {
    var u = [...new Set(s)].sort().join("")
    var alp= "abcdefghijklmnopqrstuvwxyz"
    for(i=0;i<u.length;i++){
        var index = u.charCodeAt(i)-97
        
        if(s.lastIndexOf(alp[index])-s.indexOf(alp[index])-1 != distance[index]){
            return false
        }
    }
    return true
};

console.log(checkDistances("aa",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))

// var checkDistances = function(s, distance) {
//     var alp= "abcdefghijklmnopqrstuvwxyz"
//     for(i=0;i<26;i++){
//         if(s.includes(alp[i])){
//             if(s.lastIndexOf(alp[i])-s.indexOf(alp[i])-1 != distance[i]){
//                 return false
//             }
//         }
//         else{
//             break;
//         }
//     }
//     return true
// };

// console.log(checkDistances("aa",[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))