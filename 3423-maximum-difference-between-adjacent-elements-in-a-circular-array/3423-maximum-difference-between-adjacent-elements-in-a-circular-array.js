/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(arr){
    var res=[];
    for(i=0;i<arr.length;i++)
    {
        var index = (i+1)%arr.length
        res.push(Math.abs(arr[i]-(arr[index])))
    }
    return Math.max(...res)
}

console.log(maxAdjacentDistance([-5,-10,-5]))