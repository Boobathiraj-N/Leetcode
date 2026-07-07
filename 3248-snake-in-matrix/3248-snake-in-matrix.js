/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    var row =0;
    var column =0;
    for(item of commands){
        if(item == "RIGHT"){
            column++;
        }
        else if(item == "LEFT"){
            column--;
        }
        else if(item =="DOWN"){
            row++;
        }
        else if(item =="UP"){
            row--;
        }
    }
    return (row * n)+ column
};

console.log(finalPositionOfSnake(3,["DOWN","RIGHT","UP"]));