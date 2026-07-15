/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var obj ={}
    for(item of arr){
        if(obj[item]){
            obj[item]++
        }
        else{
            obj[item]=1
        }
    }
    var freqArr = [...new Set(Object.values(obj))]
    
    return freqArr.length == Object.values(obj).length
};

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))