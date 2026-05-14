/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    var count=0;
    for(str of details)
    {
        if(str.slice(-4,-2)>60)
        {
            count++
        }
    }
    return count;
};
console.log(countSeniors(["1313579440F2036","2921522980M5644"]))