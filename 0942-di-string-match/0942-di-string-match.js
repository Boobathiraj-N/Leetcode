/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    var low=0;
    var high=s.length;
    var arr=[];
    for(i=0;i<=s.length;i++){
        if(low!==high){
            if(s[i] == "I")
            {
                arr.push(low);
                low++
            }
            else if(s[i] == "D")
            {
                arr.push(high);
                high--;
            }
        }
        else{
            arr.push(low);
        }
    
    }
    return arr;
};
console.log(diStringMatch("DDI"))