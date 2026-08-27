/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    var highest =0;
    var sum =0;
    for(item of gain){
        sum+=item;
        if(sum > highest){
            highest = sum
        }
    }
    return highest
};

console.log(largestAltitude([-5,1,5,0,-7]));