/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    var obj = new Set(candyType)
    if(obj.size < candyType.length/2){
      return obj.size
    }
    else{
      return candyType.length/2
    }
};

console.log(distributeCandies([1,1,2,3]));