module.exports = function solution(roman) {
  const romanRef = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let convertedNumber = 0;

  for (let i = 0; i < roman.length; i++) {
    const twoLetterRoman = roman[i] + roman[i + 1];

    if (romanRef[twoLetterRoman]) {
      convertedNumber += romanRef[twoLetterRoman];
      i++;
      continue;
    }

    convertedNumber += romanRef[roman[i]];
  }

  return convertedNumber;
}
