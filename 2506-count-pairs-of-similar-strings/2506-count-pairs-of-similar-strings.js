/**
 * @param {string[]} words
 * @return {number}
 */
function similarPairs(words) {
  let map = {};
  let count = 0;

  for (let word of words) {

    // unique characters
    let key = [...new Set(word)]
      .sort()
      .join("");
      
    // if already exists
    if (map[key]) {
      count += map[key];
      map[key]++;
    } else {
      map[key] = 1;
    }
  }
    return count;
}

console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))