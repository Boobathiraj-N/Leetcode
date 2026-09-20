/**
 * @param {number[][]} drones
 * @param {number[]} target
 * @return {number}
 */
var nearestDrone = function(drones, target) {
    var index = -1
    var mindistance = -1
    for(i=0;i<drones.length;i++){
      var distance = Math.abs(drones[i][0] -target[0]) + Math.abs(drones[i][1]-target[1])
      if(distance <= drones[i][2]){
        if(mindistance == -1 || distance < mindistance){
          index =i
          mindistance = distance
        }
      }
    }
    return index
  
};

console.log(nearestDrone([[0,0,8],[2,2,9]],[3,4]
));