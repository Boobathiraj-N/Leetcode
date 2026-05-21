/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    var n = code.length;
    var arr = new Array(n).fill(0)
    if(k==0){
        return arr;
    }
        for(i=0;i<n;i++){
            var sum=0
            if(k>0){
                for(j=1;j<=k;j++){
                    sum+=code[(i+j)%n]
                }
            }
            else{
                for(j=1;j<=Math.abs(k);j++){
                    sum+= code[(i-j+n)%n]
                }
            }
            arr[i]=sum
        }
    return arr
};

console.log(decrypt([2,4,9,3],-2));