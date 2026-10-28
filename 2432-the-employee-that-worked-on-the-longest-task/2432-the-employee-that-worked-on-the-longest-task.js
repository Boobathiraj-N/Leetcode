/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */

var hardestWorker = function(n, logs) {
    for(i=0;i<logs.length;i++){
      if(i==0){
        var longest = logs[i][1]
        var id = logs[i][0]
      }
      else{
        if(logs[i][1]-logs[i-1][1] == longest &&  logs[i][0] < id){
            id = logs[i][0]
          }
        else if(logs[i][1]-logs[i-1][1] > longest){
            longest = logs[i][1]-logs[i-1][1]
            id = logs[i][0] 
        }
      }
    } 
  return id
};

console.log(hardestWorker(70, [[36,3],[1,5],[12,8],[25,9],[53,11],[29,12],[52,14]]));