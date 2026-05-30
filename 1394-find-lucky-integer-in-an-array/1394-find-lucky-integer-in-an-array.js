/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    var obj={}
    for(item of arr){
        if(obj[item]){
            obj[item]++
        }
        else{
            obj[item]=1
        }
    }
    var res=-1;
    for(item in obj){
        if(item == obj[item]){
            if(obj[item]>res){
                res=obj[item]
            }
        }
    }
    return res
};

console.log(findLucky([2,2,2,3,3]));