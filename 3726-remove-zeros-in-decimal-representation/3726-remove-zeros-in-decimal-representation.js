/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    var text = String(n)
    var str =""
    for(s of text){
        if(s !== "0"){
            str += s
        }
    }
    return Number(str)
};

console.log(removeZeros(1020030));