/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    var arr=[]
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            arr.push(i)
        }
    }
    return arr;
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"))