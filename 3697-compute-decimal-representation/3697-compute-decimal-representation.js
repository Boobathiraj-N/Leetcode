/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    var res =[]
    var sum =0
    var div =10
    var length = n.toString().split('').length
    for(i=0;i<length;i++){
      sum = n%div
      n = n-sum
      if(sum !== 0){
       res.unshift(sum)       
      }
      div = div*10
    }
    return res
};

console.log(decimalRepresentation(5));