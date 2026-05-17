/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    var ans =[]
    for(item of matrix){
        var min = Math.min(...item)
        var index = item.indexOf(min)
        var istrue=true
        for(arr of matrix){
            if(arr[index]>min){
                istrue=false;
                break;
            }
        }
        if(istrue){
            ans.push(min)
        }
    }
    return ans

};

console.log(luckyNumbers([[7,8],[1,2]]))