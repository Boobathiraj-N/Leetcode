/**
 * @param {number[]} bulbs
 * @return {number[]}
 */
var toggleLightBulbs = function(bulbs) {
    var obj ={}
    var res = []
    for(num of bulbs){
        if(obj[num]){
            obj[num] = !obj[num]
        }
        else{
            obj[num] = true
        }
    }
    for(key in obj){
        if(obj[key]){
            res.push(+key)
        }
    }
    return res
};

console.log(toggleLightBulbs([100,100]));