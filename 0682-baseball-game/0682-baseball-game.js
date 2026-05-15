/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    var arr=[];
    var sum=0;
    for(item of operations){
        if(Number(item)){
            arr.push(Number(item))
        }
        else if(item == "C"){
            arr.pop()
        }
        else if(item == "D"){
            arr.push(arr[arr.length-1]*2)
        }
        else if(item == "+"){
            arr.push(arr[arr.length-2]+arr[arr.length-1])
        }
    }
    for(item of arr){
        sum+=item;
    }
    return sum;
    
};
console.log(calPoints(["1","C"]))