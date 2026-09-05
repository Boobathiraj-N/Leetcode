/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    var arr =[]
    if(n%2 == 0){
      for(i=1;i<=n/2;i++){
        arr.push(i)
        arr.push(-i)
      }
    }
    else{
      for(i=0;i<=Math.floor(n/2);i++){
        if(i==0){
          arr.push(i)
        }
        else{
          arr.push(i)
          arr.push(-i)
        }
      }
    }
    return arr
};

console.log(sumZero(5));