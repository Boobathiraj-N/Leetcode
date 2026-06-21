/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    var res =[]
    
    for(item of words){
        var rev = item.split("").reverse().join("")
        if(words.includes(rev)){
            if(!res.includes(item) && !res.includes(rev)){
                if(words.indexOf(item) !== words.indexOf(rev)){
                    res.push(item)
                }
            }
        }
    }
    return res.length
};

console.log(maximumNumberOfStringPairs(["ab","ba","cc"]));