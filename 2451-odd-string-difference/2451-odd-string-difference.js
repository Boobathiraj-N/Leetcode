/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    var str = "abcdefghijklmnopqrstuvwxyz"
    var res =[]
    for(item of words){
        var subarr =[]
        for(i=1;i<item.length;i++){
            subarr.push(str.indexOf(item[i]) - str.indexOf(item[i-1]))
        }
        res.push(subarr)
    }
    var strArr = res.map((item)=>{
        return item.join()
    })

    for(item of strArr){
        if(strArr.indexOf(item) == strArr.lastIndexOf(item)){
            return words[strArr.indexOf(item)]
        }
    }
};

console.log(oddString(["adc","wzy","abc"]))