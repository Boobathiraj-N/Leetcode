/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    var count=0;
    for(item of words){
        if(item.includes(pref) && item.indexOf(pref)==0){
            count++
        }
    }
    return count;
};
console.log(prefixCount(["leetcode","win","loops","success"],"code"))