/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    var totalSeconds = 0;
    for(i=0;i<requests.length;i++){
        if(totalSeconds == 0 && requests[i]<= n){
            totalSeconds = requests[i]
        }
        else if (requests[i] <= n){
            totalSeconds += Math.abs(requests[i-1]-requests[i])
        }
    }
    return totalSeconds
};

console.log(elevatorRequests(5,[2,1,4,3]));