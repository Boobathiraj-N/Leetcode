/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(arr) {
    var res =0;
    while(arr.length !=0){
        if(arr.length == 1){
            res+=arr[0]
            arr.pop()
        }
        else{
            
            res+=Number(arr[0].toString()+arr[arr.length-1].toString())
            arr.shift()
            arr.pop()
        }
    }
    return res
};

console.log(findTheArrayConcVal([5,14,13,8,12]))