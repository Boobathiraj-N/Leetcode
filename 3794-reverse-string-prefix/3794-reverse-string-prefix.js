/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(str, k) {
    var res=""
    res+= str.slice(0,k).split("").reverse().join("")
    res+=str.slice(k)
    return res
};

console.log(reversePrefix("hey",1))