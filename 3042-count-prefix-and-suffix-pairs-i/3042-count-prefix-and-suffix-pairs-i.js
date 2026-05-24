/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    var count=0;
    for(i=0;i<words.length;i++){
        for(j=i+1;j<words.length;j++){
            if(words[j].startsWith(words[i]) && words[j].endsWith(words[i]))
            {
                count++;
            }
        }
    }
    return count;
    
};

console.log(countPrefixSuffixPairs(["a","abb"]))