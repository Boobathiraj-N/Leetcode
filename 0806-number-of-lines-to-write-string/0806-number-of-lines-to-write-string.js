/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, str) {
    var count=0;
    var line=1;
    for(i=0;i<str.length;i++){
        count+=widths[str.charCodeAt(i)-97]
        if(count>100){
            line++;
            count=widths[str.charCodeAt(i)-97]
        }
        // console.log(str.charCodeAt(i))
    }
    return [line,count]
};

console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],"abcdefghijklmnopqrstuvwxyz"));