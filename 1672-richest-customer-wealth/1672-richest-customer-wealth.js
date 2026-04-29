/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var big=0;
    for(item of accounts){
        var res=0;
        for(items of item){
            res +=items;
        }
        if(res>big){
            big=res;
        }
    }
    return big;
};

console.log(maximumWealth([[1,2,3],[3,2,1]]))