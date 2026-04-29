/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max = Math.max(...candies)
    var newarr = candies.map((item)=> {
        return item+extraCandies >=max? true:false;
    })
    return newarr;
};

console.log(kidsWithCandies([12,1,12],10))