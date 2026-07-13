/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    var arr = tasks.map((item)=>{
        return item[0]+item[1]
    })
    return Math.min(...arr);
};

console.log(earliestTime([[1,6],[2,3]]));