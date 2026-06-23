/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    var res=[]
    var arr = words.sort((a,b)=>a.length-b.length)
    
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[j].includes(arr[i])){
                res.push(arr[i]);
                break
            }
        }
    }
    return res
};

console.log(stringMatching(["blue","green","bu"]))