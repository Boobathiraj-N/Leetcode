/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */

var numOfUnplacedFruits = function(fruits, baskets) {
    var arr =[];
    for(i=0;i<fruits.length;i++){
        for(j=0;j<baskets.length;j++){
            if(fruits[i] <= baskets[j]){
                if(!arr.includes(j)){
                    arr.push(j)
                    break
                }
            }
        }
    }
    return fruits.length - arr.length
};

console.log(numOfUnplacedFruits([1,2,1],[1,2,1]));

// var numOfUnplacedFruits = function(fruits, baskets) {
//     var arr =[];
//     for(fruit of fruits){
//         for(basket of baskets){
//             if(fruit <= basket && !arr.includes(baskets.indexOf(basket))){
//                 arr.push(baskets.indexOf(basket))
//                 break;
//             }
//         }
//     }
//     return fruits.length - arr.length
// };

console.log(numOfUnplacedFruits([3,6,1],[6,4,7]));