/**
 * Complete the solution so that it splits the string into pairs of two characters.
 * If the string contains an odd number of characters then it should replace the missing
 * second character of the final pair with an underscore('_').
 */

module.exports = function solution(str) {
  let result = [];

  for (let position = 0; position <= str.length - 1; position += 2) {
    result.push(`${str[position]}${str[position + 1] || "_"}`);
  }

  return result;
};
