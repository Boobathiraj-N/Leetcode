/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b)=>a-b)
    students.sort((a,b)=>a-b)
    var sum =0;
    for(i=0;i<seats.length;i++){
        sum += Math.abs(seats[i]-students[i])
    }
    return sum
};

console.log(minMovesToSeat([3,1,5],[2,7,4]))