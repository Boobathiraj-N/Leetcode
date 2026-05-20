/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    var arr = [];
    var count=0
    for(item of rectangles){
        arr.push(Math.min(...item))
    }
    var max = Math.max(...arr)
    for (item of arr){
        if(item == max){
            count++
        }
    }
    
    return count
};

console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]]))