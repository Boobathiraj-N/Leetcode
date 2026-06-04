/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    var res=[]
    for(str of words[0]){
        var count=0;
        for(i=1;i<words.length;i++){
            if(!words[i].includes(str)){
                count++;
                break;
            }
            else{
                var result= words[i].replace(str,"")
                words[i]=result
            }
        }
        if(count==0){
            res.push(str)
        }
    }
    return res
};
console.log(commonChars(["bella","label","roller"]))