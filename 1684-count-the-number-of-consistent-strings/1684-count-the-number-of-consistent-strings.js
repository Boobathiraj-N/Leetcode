/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let str =allowed.split("").sort().join("")

    let newarr = words.map((item)=>{
        return [...new Set(item.split(""))].sort().join("")
    })
    let count=0;
    
    for(item of newarr){
        if(str.includes(item)){
            count++;
        }
        else{
            for(letter of item){
                var flag =0;
                if(!str.includes(letter)){
                    flag=1;
                    break;
                }
            }
            if(flag ==0){
                count++
            }
        }
    }
    return count
};

console.log(countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"]))