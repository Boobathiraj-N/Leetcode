/**
 * @param {number[]} stones
 * @return {number}
 */


var lastStoneWeight = function(stones) {
    stones.sort((a,b)=>b-a)
    while(stones.length > 1){
      if(stones[0]-stones[1] == 0){
        stones.splice(0,2)
      }
      else{
        stones[1] = stones[0]-stones[1]
        stones.shift()
        stones.sort((a,b)=>b-a)
      }
    }
    if(stones.length == 0){
      return 0
    }
    else{
      return stones[0]
    }
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))