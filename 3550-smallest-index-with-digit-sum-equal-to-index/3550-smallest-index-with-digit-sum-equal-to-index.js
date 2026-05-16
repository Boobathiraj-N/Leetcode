/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(arr) {
    var resarr=[]
    for(i=0;i<arr.length;i++){
        var sumofdigit = 0;
        var n = arr[i]
        while(n>0){
            var lastdigit = n%10;
            sumofdigit+=lastdigit;
            n= Math.floor(n/10)
        }
        if(i== sumofdigit){
            resarr.push(i)
        }
    }
    return resarr.length!==0? Math.min(...resarr):-1
};

console.log(smallestIndex([1,2,3]));