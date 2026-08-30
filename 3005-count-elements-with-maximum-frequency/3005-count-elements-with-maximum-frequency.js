/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    var obj = {}
    for(item of nums){
        if(obj[item]){
            obj[item]++
        }
        else{
            obj[item]= 1
        }
    }
    var arr = Object.values(obj).sort((a,b)=>b-a)
    var sum =0;
    for(i=0;i<arr.length;i++){
        if(arr[i] == arr[i+1]){
            sum+=arr[i]
        }
        else{
            sum+=arr[i]
            break
        }
    }
    return sum
};

console.log(maxFrequencyElements([1,2,2,3,1,4]))