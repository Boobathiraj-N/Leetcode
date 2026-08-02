/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function(words, chars) {
    var count = 0;
    var obj ={}
    for(letter of chars){
        if(obj[letter]){
            obj[letter]++
        }
        else{
            obj[letter] = 1
        }
    }
    for(item of words){
        isValid =true;
        var obj1 ={...obj}
        for(s of item){
            if(chars.includes(s) && obj1[s] > 0){
                obj1[s]--
            }
            else{
                isValid = false;
                break;
            }
        }
        if(isValid){
            count += item.length
        }
    }
    return count
};

console.log(countCharacters(["hello","world","leetcode"],"welldonehoneyr"));

// var countCharacters = function(words, chars) {
//     var count = 0;
//     for(item of words){
//         isValid =true;
//         for(s of item){
//             if(!chars.includes(s)){
//                 isValid = false;
//                 break;
//             }
//         }
//         if(isValid){
//             count += item.length
//         }
//     }
//     return count
// };

// console.log(countCharacters(["hello","world","leetcode"],"welldonehoneyr"));