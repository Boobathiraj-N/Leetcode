/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
// var haveConflict = function(event1, event2) {
//     if(event2[0] >= event1[0] && event2[0] <= event1[1]){
//         return true;
//     }
//     else if(event2[1] >= event1[0] && event2[1] <= event1[1]){
//         return true;
//     }
//     else{
//         return false;
//     }
// };

function haveConflict(event1, event2) {
    // Extract start and end times for both events
    const [start1, end1] = event1;
    const [start2, end2] = event2;

    // Check if the time intervals overlap
    return start1 <= end2 && start2 <= end1;
}

console.log(haveConflict(["16:53","19:00"],["10:33","18:15"]));