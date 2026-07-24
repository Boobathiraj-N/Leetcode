/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    var odd =[]
    var even =[]
    var res =[]
    for(item of nums){
        if(item%2 == 0){
            even.push(item)
        }
        else{
            odd.push(item)
        }
    }
    
    for(i=0;i<odd.length;i++){
        res.push(even[i])
        res.push(odd[i])
    }
    return res
};

console.log(sortArrayByParityII([2,3]))