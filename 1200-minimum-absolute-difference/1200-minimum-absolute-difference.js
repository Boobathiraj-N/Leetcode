/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b)
    var pairs =[]
    var sum =[]
    var res =[]
    for(i=0;i<arr.length-1;i++){
      sum.push((arr[i+1])-(arr[i]))
      pairs.push([arr[i],arr[i+1]])
    }
    var min = Math.min(...sum)
    for(i=0;i<sum.length;i++){
      if(sum[i] == min){
        res.push(pairs[i])
      }
    }
  return res
  
};


console.log(minimumAbsDifference([40,11,26,27,-20]));