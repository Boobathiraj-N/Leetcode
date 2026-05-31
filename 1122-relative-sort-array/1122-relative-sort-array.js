/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    var res=[]
    var dummy=[]
    arr1.sort((a,b)=>a-b);
    for(item of arr2){
        for(i=arr1.indexOf(item);i<arr1.length;i++){
            if(arr1[i]!==item){
                break;
            }
            res.push(arr1[i])
        }
    }
    for(item of arr1){
        if(!res.includes(item)){
            dummy.push(item)
        }
    }
    res.push(...dummy)
    return res
};