/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    var res =[]
    for (item of emails){
        arr = item.split("@")
        arr[0] = arr[0].replaceAll(".","")
        // console.log(arr)
        if(arr[0].indexOf("+") > -1){
            arr[0] = arr[0].slice(0,arr[0].indexOf("+"))
        }

        if(!res.includes(arr.join("@"))){
            res.push(arr.join("@"))
        }
    }
    return res.length
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))