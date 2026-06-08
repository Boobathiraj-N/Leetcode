/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// var vowelStrings = function(arr, left, right) {
//     var count=0;
//     for(i=left;i<=right;i++){
//         if(/^[aeiou].*[aeiou]$|^[aeiou]$/.test(arr[i])){
//                 count++
//         }
//     }
//     return count;
// };

// console.log(vowelStrings(["ou","e","e"],0,2))


var vowelStrings = function(words, left, right) {
    var count=0;
    var arr=['a','e','i','o','u']
    for(i=left;i<=right;i++){
        // if(/^[aeiou].*[aeiou]$|^[aeiou]$/.test(arr[i])){
        //         console.log(arr[i])
        //         count++
        // }
        if(arr.includes(words[i][0])){
            if(arr.includes(words[i][words[i].length-1])){
                count++
            }
        }
    }
    return count;
};

console.log(vowelStrings(["ou","e","e"],0,2))