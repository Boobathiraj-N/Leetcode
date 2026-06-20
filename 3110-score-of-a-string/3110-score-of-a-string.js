/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    var sum =0;
    var end= s.length-1;
    for(i=0;i<end;i++){
        sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1))
    }
    return sum;

};

console.log(scoreOfString("zaz"));