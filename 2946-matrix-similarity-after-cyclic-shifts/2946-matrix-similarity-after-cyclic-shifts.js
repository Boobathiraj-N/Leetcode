/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {
    var arr = mat.map(item => [...item])
    
    for(let i =0;i<k;i++){  // loop for k times 
        for(let j=0;j<arr.length;j++){
            if(j%2 == 0){
                arr[j].push(arr[j].shift())
                
                // var num = arr[j].splice(arr[j][0-1],1)
                // arr[j].push(...num)
            }
            else{
                arr[j].unshift(arr[j].pop())
                // var num1 = arr[j].splice(arr[j][arr.length-2],1)
                // arr[j].unshift(...num1)
            }
        }
    }

    
    return JSON.stringify(arr) == JSON.stringify(mat)
};

console.log(areSimilar([[1,2,3],[4,5,6],[7,8,9]],4));