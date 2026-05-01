/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    var max=0;
    for(item of sentences){
        arr= item.split(" ");
        if(max<arr.length){
            max=arr.length;
        }
    }
    return max
};
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))