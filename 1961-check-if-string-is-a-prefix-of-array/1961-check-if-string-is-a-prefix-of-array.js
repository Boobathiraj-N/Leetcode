/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    var str ="";
    for(item of words)
    {
        str += item;
        if(str.length<=s.length)
        {
            if(str == s){
                return true;
            }
        }
        else{
            break;
        }
        
    }
    return false
};
console.log(isPrefixString("iloveleetcode",["i","love","leetcode","apples"]));