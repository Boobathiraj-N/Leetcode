/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    var val=0;
    for(item of strs){
        if(isNaN(item)){
            if(val < item.length){
                val = item.length;
            }
        }
        else{
            if(val < Number(item)){
                val = Number(item)
            }
        }
    }
    return val
}

console.log(maximumValue(["1","01","001","0001"]))