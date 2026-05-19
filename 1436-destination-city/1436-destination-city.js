/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    
    let fromCities = new Set();
    
    for (let [from, to] of paths) {
        fromCities.add(from);
    }
    
    for (let [from, to] of paths) {
        if (!fromCities.has(to)) {
            return to;
        }
    }

};
console.log(destCity([["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]))