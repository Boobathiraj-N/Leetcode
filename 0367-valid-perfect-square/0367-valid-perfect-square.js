/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num==1){
            return true
        }
    else if(num>2)
    {
        for(i=1;i<=num/2;i++)
        {
            if(i*i>=num)
            {
                if(i*i==num){
                    return true
                }
                else{
                    return false
                }
            }    
        }
        return false
    }
   
};

console.log(isPerfectSquare(2))