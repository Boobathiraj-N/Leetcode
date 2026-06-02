/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize1) {
    var arr = boxTypes.sort((a,b)=>b[1]-a[1])
    var sum=0;
    var truckSize=truckSize1;
    for(i=0;i<arr.length;i++){
        truckSize -= arr[i][0]
        if(truckSize<0){
            truckSize+=arr[i][0]
            sum+=truckSize*arr[i][1]
            break;
        }
        else{
            sum+=arr[i][0]*arr[i][1]
        }
    }
    return sum
    
};

console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]],10));