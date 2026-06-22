/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    
    while(true){
        var flag =0;
        for(i=0;i<words.length-1;i++){
            var str = words[i].split("").sort().join("")
            var str1 = words[i+1].split("").sort().join("")
            
            if(str ==str1){
                words.splice(i+1,1)
                flag=1;
                break;
            }
        }
        if(flag==0){
            break
        }
    }
    return words
};

console.log(removeAnagrams(["a","b","a"]))