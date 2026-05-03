/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    var arr=[...heights]
    arr.sort((a,b)=>b-a)
    var res=[]
    for(item of arr){
 
        res.push(names[(heights.indexOf(item))])
    }
    return res
};
console.log(sortPeople(["Mary","John","Emma"],[180,165,170]))