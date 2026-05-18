/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    var arr = grid.map(item => {
        return item.sort((a,b)=>b-a)
    })
    var sum=0;
    if(arr[0].length ==1){
        for(item of arr){
            sum+=Number(item)
        }
    }
    else{
        for(i=0;i<arr[0].length;i++){
            var max=0;
            for(item of arr){
                if(item[i]>max){
                    max=item[i]
                }
            }
            sum+=max;
        }
    }
    return sum
}

console.log(deleteGreatestValue([[1,2,4],[3,3,1]]))