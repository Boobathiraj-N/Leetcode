/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    var count=0;
    for(item of words1){
        if(words2.includes(item)){
            if(words1.indexOf(item) == words1.lastIndexOf(item)){
                if(words2.indexOf(item)== words2.lastIndexOf(item)){
                    count++
                }
            }
        }
    }
    return count;
}

console.log(countWords(["leetcode","is","amazing","as","is"],["amazing","leetcode","is"]));