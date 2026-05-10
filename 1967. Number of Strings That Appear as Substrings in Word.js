var numOfStrings = function(patterns, word) {
    var count=0;
    for(str of patterns)
    {
        if(word.includes(str))
        {
            count++
        }
    }
    return count
};

console.log(numOfStrings(["a","a","a"],"ab"))
