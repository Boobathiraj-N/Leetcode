/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
// var minimumIndex = function(capacity, itemSize) {
//     var arr = [...capacity]
//     capacity.sort((a,b)=>a-b)
//     for(item of capacity){
//         if(item >= itemSize){
//             return arr.indexOf(item)
//         }
//     }
//     return -1
// };

// console.log(minimumIndex([4],5))


var minimumIndex = function(capacity, itemSize) {
    var res ;
    for(item of capacity){
        if(res){
            if(item >= itemSize && item<res){
                res =item
            }
        }
        else{
            if(item >= itemSize){
                res =item
            }
        }
        
    }
    if(res){
        return capacity.indexOf(res)
    }
    else{
        return -1
    }
};

console.log(minimumIndex([1,5,3,7],3))