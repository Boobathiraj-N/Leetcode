/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    var Alice=0;
    var Bob=0;
    for(item of nums){
        if(item<10 && item !==0){
            Alice+=item;
        }
        else if (item>=10 && item !==0){
            Bob += item;
        }
    }

    if(Alice!==Bob){
        return true
    }
    else{
        return false;
    }
};

console.log(canAliceWin([5,5,5,25]));