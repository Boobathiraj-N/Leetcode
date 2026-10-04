/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    var index =0;
    var count =0;
    for(i=0;i<grid.length;i++){
      var ones=0;
      for(item of grid[i]){
        if(item == 1){
          ones++
        }
      }
      if(ones>count){
        count=ones
        index = i
      }
    }
    return index
};


console.log(findChampion([[0,1],[0,0]]));