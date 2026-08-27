/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    var sum=0
    var mult =1
    var n1=n
    while(n1>0){
        var lastdigit = n1%10
        sum+=lastdigit
        mult *= lastdigit
        n1 = Math.floor(n1/10)
    }
    var res = sum + mult
    if(n % res == 0){
        return true
    }
    else{
        return false
    }
};

console.log(checkDivisibility(23))