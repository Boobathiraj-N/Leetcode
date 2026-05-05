/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    var arr=[]
    for(i=0;i<prices.length;i++){
        var final=0;
        for(j=i;j<prices.length;j++){
            if(prices[i]){
                final=prices[i]
                if(prices[i]>=prices[j] && i!==j){
                    final = prices[i]-prices[j]
                    break;
                }
            }
        }
        arr.push(final)
    }
    return arr;
};

console.log(finalPrices([8,4,6,2,3]))