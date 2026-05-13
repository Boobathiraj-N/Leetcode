/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(arr) {
    var str = arr[0]%2==0?"even":"odd"
    if(str=="even"){
        for(i=0;i<arr.length;i++){
            if(i%2==0){
                if(arr[i]%2!==0){
                    return false;
                }
            }
            else{
                    if(arr[i]%2==0){
                        return false;
                    }
                }
        }
        return true
    }
    else{
        for(i=0;i<arr.length;i++){
            if(i%2==0){
                if(arr[i]%2==0){
                    return false;
                }
            }
            else{
                    if(arr[i]%2!=0){
                        return false;
                    }
                }
        }
        return true
    }
};
console.log(isArraySpecial([4,3,1,6]));