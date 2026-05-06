/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    var resarr=[]
    for(item of image){
        var arr=[]
        for(i=item.length-1;i>=0;i--){
            if(item[i]==0){
                arr.push(1)
            }
            else{
                arr.push(0)
            }
        }
        resarr.push(arr)
    }
    return resarr
};

console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))