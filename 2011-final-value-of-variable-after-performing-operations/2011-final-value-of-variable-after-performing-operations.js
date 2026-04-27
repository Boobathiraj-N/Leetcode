/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    var x=0;
    for(item of operations){
        if(item == "++X" || item == "X++" ){
            x++;
        }
        else{
            x--;
        }
    }
    return x;
};
console.log(finalValueAfterOperations(["++X","++X","X++"]))