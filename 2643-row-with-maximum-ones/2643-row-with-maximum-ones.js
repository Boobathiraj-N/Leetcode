/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let index=0;
  let count=0;
  for(i=0;i<mat.length;i++){
      if(mat[i].includes(1)){
          var arr = mat[i].filter((item)=>item ==1)
          
          if(arr.length > count){
              index = i;
              count=arr.length;
          }
      }
  }
  return [index,count]

};

console.log(rowAndMaximumOnes([[0,0],[1,1],[0,0]]));


//   var res =[]
//   for(i=0;i<mat.length;i++){
//       const obj = {}
//       if(mat[i].includes(1)){
//           var arr = mat[i].filter((item)=> item == 1)
//           obj[i]=arr.length
//           obj.l=arr.length
//           res.push(obj)
//       }
//       else{
//         obj[i]=0;
//         obj.l=0
//         res.push(obj)
//       }
//   }
// res.sort((a,b)=>b.l-a.l)
// for(i in res[0])
// {
//     return [Number(i),res[0][i]]
// }
