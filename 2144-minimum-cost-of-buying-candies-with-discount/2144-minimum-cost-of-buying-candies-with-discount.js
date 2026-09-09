/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    var sum =0;
    if(cost.length == 1){
      return cost[0]
    }
    else if(cost.length == 2){
      return cost[0] + cost[1]
    }
    else{
      cost.sort((a,b)=>b-a)
      for(i=0;i<cost.length;i+=3){
        if(cost[i] && cost[i+1]){
            sum += cost[i]+cost[i+1]
        }
        else{
            sum += cost[i]
        }
        
      }
    }
    return sum
};

console.log(minimumCost([1,2,3]))