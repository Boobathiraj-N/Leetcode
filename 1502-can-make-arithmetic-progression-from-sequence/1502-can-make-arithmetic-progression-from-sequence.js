/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    var arr = arr.sort((a,b)=>a-b)
    
    for(i=0;i<arr.length-1;i++){
        if(i == 0){
            var d = arr[i+1] - arr[i]
        }
        else{
            if(arr[i+1] - arr[i] !== d){
                return false
            }
        }
    }
    return true
};

console.log(canMakeArithmeticProgression( [1,5,3]));