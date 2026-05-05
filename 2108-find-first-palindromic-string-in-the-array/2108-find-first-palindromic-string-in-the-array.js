/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    var res="";
    for(item of words){
        count=0;
        for(i=0;i<Math.floor(item.length);i++){
            if(item[i]!==item.at(-(i+1))){
                count++;
                break;
            }
        }
        if(count==0){
            return item;
        }
    }
    return res;
};

console.log(firstPalindrome(["def","ghi"]))