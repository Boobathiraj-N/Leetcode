/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var fr = "qwertyuiop";
    var sr = "asdfghjkl";
    var tr = "zxcvbnm";
    var res =[];
    for(item of words){
        var loweritem = item.toLowerCase()
        var str = fr.includes(loweritem[0])?fr:
                  sr.includes(loweritem[0])?sr:tr
                  
        isValid = true
        for(i=0;i<item.length;i++){
            if(!str.includes(loweritem[i])){
                isValid = false;
                break
            }
        }
        if(isValid){
            res.push(item)
        }
    }
    return res
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]));