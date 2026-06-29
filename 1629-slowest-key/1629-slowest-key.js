/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    var max=0
    var index=0
    for(i=0;i<releaseTimes.length;i++){
      if(i==0){
          max = releaseTimes[i]-0
          index = i
      }
      else{
          if(releaseTimes[i]-releaseTimes[i-1] >= max){

                if(releaseTimes[i]-releaseTimes[i-1] == max){
                    if(keysPressed[index] > keysPressed[i]){
                        max =releaseTimes[i]-releaseTimes[i-1]
                    }
                    else{
                        max =releaseTimes[i]-releaseTimes[i-1]
                        index = i
                    }
                }
                else{
                    max =releaseTimes[i]-releaseTimes[i-1]
                    index =i
                }
          }
      }
    }
    return keysPressed[index]
};

console.log(slowestKey([1,2],"ba"))