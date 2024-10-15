const splitString = require("./index");

test("Splits the string 'abcdef' into the following array of strings: ['ab', 'cd', 'ef']", () => {
  expect(splitString("abcdef")).toEqual(['ab', 'cd', 'ef']);
});
test("Splits the string 'abcdefg' into the following array of strings: ['ab', 'cd', 'ef', 'g_']", () => {
  expect(splitString("abcdefg")).toEqual(['ab', 'cd', 'ef', 'g_']);
});
test("Transforms the string '' into an empty array", () => {
  expect(splitString("")).toEqual([]);
});
