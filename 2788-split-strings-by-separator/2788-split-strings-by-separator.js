/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    var res=[]
    for(item of words){
        var arr = item.split(separator)
        for(word of arr){
            if(word !== ''){
                res.push(word)
            }
        }
    }
    return res
};

console.log(splitWordsBySeparator(["|||"],"|"))