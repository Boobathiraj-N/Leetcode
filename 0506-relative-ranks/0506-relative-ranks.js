/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    var res=[]
    var arr =[...score]
    arr.sort((a,b)=>b-a)
    for(i=0;i<score.length;i++){
        if(arr.indexOf(score[i])==0){
            res.push("Gold Medal")
        }
        else if(arr.indexOf(score[i])==1){
            res.push("Silver Medal")
        }
        else if(arr.indexOf(score[i])==2){
            res.push("Bronze Medal")
        }
        else{
            index = arr.indexOf(score[i])+1
            res.push(String(index))
        }
    }
    return res
};

console.log(findRelativeRanks([5,4,3,2,1]));