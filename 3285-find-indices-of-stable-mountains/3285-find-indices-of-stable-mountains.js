/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    var res=[];
    for(i=1;i<height.length;i++){
        if(height[i-1]>threshold){
            res.push(i)
        }
    }
    return res
};

console.log(stableMountains([10,1,10,1,10],3));