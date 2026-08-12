/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    var str=""
    for(item of words){
        var sum =0 
        for(i=0;i<item.length;i++){
            sum += weights[item.charCodeAt(i)-97]
        }
        str += String.fromCharCode(26-(sum%26)+96)
    }
    return str
};

console.log(mapWordWeights(["a","b","c"],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))

