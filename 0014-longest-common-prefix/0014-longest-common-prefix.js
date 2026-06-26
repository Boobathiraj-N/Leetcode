/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
    var str =""
    var res =""
    for(i=0;i<arr[0].length;i++){
        str += arr[0][i]
        flag =0;
        for(item of arr){
            if(item.slice(0,i+1) !== str){
                flag =1;
                break
            }
        }
        if(flag == 0){
            res = str;
        }
        else{
            break
        }
    }
    return res
};

console.log(longestCommonPrefix(["dog","racecar","car"]));