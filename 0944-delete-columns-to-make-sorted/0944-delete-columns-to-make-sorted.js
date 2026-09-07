/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    var count =0;
    for(i=0;i<strs[0].length;i++){
      var str =""
      for(item of strs){
        str += item[i]
      }
      var str1 = str.split('').sort().join('')
      if(str1 !== str){
        count++
      }
    }
  return count
};

console.log(minDeletionSize(["cba","daf","ghi"]));