/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if(words.length == 1){
        return 1
    }
    else{
        var encarr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        var res =[];
        for(item of words){
            var str="";
            for(letter of item){
                str += encarr[letter.charCodeAt()-97]
            }
            if(!res.includes(str)){
                res.push(str)
            }
        }
        return res.length;
    }
};

console.log(uniqueMorseRepresentations(["a"]))