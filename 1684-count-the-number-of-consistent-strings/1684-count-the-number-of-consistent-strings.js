/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
function countConsistentStrings(allowed, words) {
    // Search operation speed ah irukka 'allowed' characters ah Set ah mathikrom
    const allowedSet = new Set(allowed);
    let consistentCount = 0;

    // Oru oru word ah check panrom
    for (let word of words) {
        let isConsistent = true;

        // Word la irukka ovvoru character um allowed Set la irukkanu pakrom
        for (let char of word) {
            if (!allowedSet.has(char)) {
                isConsistent = false; // Set la illana adu consistent illai
                break; // Aduthu check panna thevai illai, loop ah break pannalaam
            }
        }

        // Word consistent ah irundha count ah increment panrom
        if (isConsistent) {
            consistentCount++;
        }
    }

    return consistentCount;
}

console.log(countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"]))