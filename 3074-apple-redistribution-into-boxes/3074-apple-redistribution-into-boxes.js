/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    var sum =0;
    for(item of apple){
        sum += item
    }
    capacity.sort((a,b)=>b-a)
    var box =0
    var count =0
    for(item of capacity){
        box += item
        count++
        if(sum <= box){
            break
        }
    }
    return count
};

console.log(minimumBoxes([1,3,2],[4,3,1,5,2]));