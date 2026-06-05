/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    var res=[];
    for(i=0;i<mat.length;i++){
        count=0;
        for(j=0;j<mat[i].length;j++){
            if(mat[i][j] == 1){
                count++
            }
            else if(mat[i][j]==0){
                break;
            }
        }
        res.push(count)
    }
    
    var mapped = res.map((item,index) =>{
    return ({val:item, idx:index})
    })
    
    mapped.sort((a,b)=>a.val - b.val)
    
    var arr = mapped.slice(0,k).map((item)=>{
        return item.idx
    })
    
    return arr
    
};