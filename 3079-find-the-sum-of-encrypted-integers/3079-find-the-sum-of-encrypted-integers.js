/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    var res=[]
    var sumofres=0
    for(num of nums){
        var str =String(num) 
        var arr =str.split("")
        var max = Math.max(...arr)
        var sumd = ""
        for(i=0;i<arr.length;i++){
            sumd+=max
        }
        res.push(Number(sumd))
    }
    for(item of res){
        sumofres+=item
    }
    return sumofres
};

console.log(sumOfEncryptedInt([1,2,3]))