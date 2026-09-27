/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
function evaluate(s, knowledge) {
    const map = new Map(knowledge);
    return s.replace(/\((.*?)\)/g, (match, key) => {
        return map.has(key) ? map.get(key) : "?";
    });
}