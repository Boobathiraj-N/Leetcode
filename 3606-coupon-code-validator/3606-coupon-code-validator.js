/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    var electronics = [];
    var grocery = [];
    var pharmacy = [];
    var restaurant = [];
    
    var pattern = /^[a-zA-Z0-9_]+$/;

    for (var i = 0; i < code.length; i++) {
        if (pattern.test(code[i]) && isActive[i]) {
            if (businessLine[i] === "electronics") electronics.push(code[i]);
            else if (businessLine[i] === "grocery") grocery.push(code[i]);
            else if (businessLine[i] === "pharmacy") pharmacy.push(code[i]);
            else if (businessLine[i] === "restaurant") restaurant.push(code[i]);
        }
    }

    return [
        ...electronics.sort(),
        ...grocery.sort(),
        ...pharmacy.sort(),
        ...restaurant.sort()
    ];
};



// var validateCoupons = function(code, businessLine, isActive) {
//     var business = ["electronics", "grocery", "pharmacy", "restaurant"];
//     var res =[]
//     var pattern = /^[a-zA-Z0-9_]+$/;
//     for(i=0;i<code.length;i++){
//         if(pattern.test(code[i]) && business.includes(businessLine[i]) && isActive[i]){
//             res.push(code[i])
//         }

//     }
//     return res.sort()
// };

// console.log(validateCoupons(["GROCERY15","ELECTRONICS_50","DISCOUNT10"],["grocery","electronics","invalid"],[false,true,true]))