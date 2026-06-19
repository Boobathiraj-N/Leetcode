/**
 * @param {string[]} events
 * @return {number[]}
 */
function scoreValidator(events) {
    let score = 0;
    let counter = 0;

    for (const event of events) {
        // Condition 1: Counter 10 reach aana loop-ah niruthidanum
        if (counter === 10) {
            break;
        }

        // Condition 2: Event types-ah check panrom
        if (event === "W") {
            counter += 1;
        } else if (event === "WD" || event === "NB") {
            score += 1;
        } else {
            // String-ah number-ah mathi score kooda add panrom ("0", "1", "2", "3", "4", "6")
            score += Number(event);
        }
    }

    return [score, counter];
}

console.log(scoreValidator(["1","4","W","6","WD"]));
