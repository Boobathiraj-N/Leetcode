/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    var arr = [...items1,...items2].sort((a,b)=>a[0]-b[0])
    var res=[]
    for(i=0;i<arr.length;i++)
    {
        if(i!==arr.length-1 && arr[i][0] == arr[i+1][0])
        {
            res.push([arr[i][0],arr[i][1]+arr[i+1][1]])
        }
        else
        {
            if(res.length==0)
            {
                res.push(arr[i])
            }
            else if (res.length > 0 && res[res.length-1][0]!==arr[i][0])
            {
                res.push(arr[i])
            }
        }
    }
    return res
};

console.log(mergeSimilarItems([[1,1],[3,2],[2,3]],[[2,1],[3,2],[1,3]]))