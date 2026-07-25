/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned);

    const words = paragraph
        .toLowerCase()
        .replace(/[^a-z]/g, " ") 
        .trim()
        .split(/\s+/); 

    const obj = {};

    for (let word of words) {
        if (word && !bannedSet.has(word)) {
            obj[word] = (obj[word] || 0) + 1;
        }
    }

    let maxKey = "";
    let maxCount = 0;

    for (let key in obj) {
        if (obj[key] > maxCount) {
            maxCount = obj[key];
            maxKey = key;
        }
    }

    return maxKey;
}