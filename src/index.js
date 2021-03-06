module.exports = function check(str, bracketsConfig) {
    const openingBrackets = bracketsConfig.map((arr) => arr[0]);
    const closingBrackets = bracketsConfig.map((arr) => arr[1]);
    const strBracketsArray = str.split("");
    const openedBrackets = [];
    for (let i = 0; i < strBracketsArray.length; i++) {
        const currentBracket = strBracketsArray[i];
        const bracketPosition = closingBrackets.indexOf(currentBracket);
        if (openingBrackets.includes(currentBracket)) {
            if (
                closingBrackets.includes(currentBracket) &&
                openedBrackets[openedBrackets.length - 1] ===
                    openingBrackets[bracketPosition]
            ) {
                openedBrackets.pop();
            } else {
                openedBrackets.push(currentBracket);
            }
        } else if (closingBrackets.includes(currentBracket)) {
            if (
                strBracketsArray[i - 1] === openingBrackets[bracketPosition] ||
                (closingBrackets.includes(strBracketsArray[i - 1]) &&
                    openedBrackets[openedBrackets.length - 1] ===
                        openingBrackets[bracketPosition])
            ) {
                openedBrackets.pop();
            } else {
                return false;
            }
        }
    }
    if (openedBrackets.length === 0) {
        return true;
    } else {
        return false;
    }
};
