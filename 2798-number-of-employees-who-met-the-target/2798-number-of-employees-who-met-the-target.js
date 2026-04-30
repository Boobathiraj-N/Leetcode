/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    var arr= hours.filter((item)=>{
        return item>=target
    })
    return arr.length;
};

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4],2))