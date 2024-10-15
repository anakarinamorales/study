/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
 * ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13.
 * If there are numbers or special characters included in the string, they should be returned as they are.
 * Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

module.exports = function rot13(message) {
    const charMap = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    let cypher = '';
    const isLowerCase = (char) => {
        return char === char.toLowerCase() && char !== char.toUpperCase();
    };

    for (let i = 0; i < message.length; i++) {
        const currentChar = message[i];
        const charIsNotNumberOrSpecial = /[a-z]/gi.test(currentChar);

        if (charIsNotNumberOrSpecial) {
            if (isLowerCase(currentChar)) {
                cypher += charMap[(charMap.indexOf(currentChar) + 13) % charMap.length];
                continue;
            }

            cypher +=
                charMap[
                    (charMap.indexOf(currentChar.toLowerCase()) + 13) % charMap.length
                ].toUpperCase();
            continue;
        }

        cypher += currentChar;
    }

    return cypher;
};
