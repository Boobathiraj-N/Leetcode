/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function(events) {
    var score=0;
    var count=0;
    for(item of events){
        if(count<10){
            if(!isNaN(item)){
            score+=Number(item);
            }
            else{
                if(item == "W"){
                    if(count < 10){
                        count++;
                    }
                    
                }
                else if(item == "WD" || item == "NB"){
                    score++;
                }
            }
        }
    }
    return [score,count]
};

console.log(scoreValidator(["W","W","W","W","W","W","W","W","W","W","W",6]));