/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    var arr = [...capacity]
    capacity.sort((a,b)=>a-b)
    for(item of capacity){
        if(item >= itemSize){
            return arr.indexOf(item)
        }
    }
    return -1
};

console.log(minimumIndex([4],5))