/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    var arr = [];
    for(i=0;i<s.length;i++)
    {
      arr[i] = s[indices.indexOf(i)]
    }
    return arr.join("")
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))