/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    // var str = words.join(" ");
    // var count=0;
    // for(item of words){
    //     if(s.startsWith(item)){
    //         count++;
    //     }
    // }
    // return count;

    var arr = words.filter((item)=>s.startsWith(item))
    return arr.length
};

console.log(countPrefixes(["feh","w","w","lwd","c","s","vk","zwlv","n","w","sw","qrd","w","w","mqe","w","w","w","gb","w","qy","xs","br","w","rypg","wh","g","w","w","fh","w","w","sccy"],"w"))