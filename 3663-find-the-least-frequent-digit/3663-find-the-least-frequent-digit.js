/**
 * @param {number} n
 * @return {number}
 */

var getLeastFrequentDigit = function(n) {
    var str = n.toString()
    var obj={}
    var res
    var freq
    for(s of str){
        if(obj[s]){
            obj[s]++
        }
        else{
            obj[s] = 1
        }
    }
    for(item in obj){
        if(freq == 1){
            break
        }
        else if(res && obj[item]<freq){
            res = +item
            freq = obj[item]
            // console.log("ithu else if la res && obj[item]<freq",res)
        }
        else if(!res){
            freq =  obj[item]
            res = +item
        }
    }
    return res

};

console.log(getLeastFrequentDigit(723344511));

// var getLeastFrequentDigit = function(n) {
//     var str = n.toString()
//     var obj={}
//     for(s of str){
//         if(obj[s]){
//             obj[s]++
//         }
//         else{
//             obj[s] = 1
//         }
//     }
//     for(item in obj){
//         return +item
//     }

// };

// console.log(getLeastFrequentDigit(723344511));