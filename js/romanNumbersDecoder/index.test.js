const romanNumbersDecoder = require("./index");

console.log(romanNumbersDecoder);

test("Converts the roman number XXI to 21", () => {
  expect(romanNumbersDecoder("XXI")).toBe(21);
});

test("Converts the roman number I to 1", () => {
  expect(romanNumbersDecoder("I")).toBe(1);
});

test("Converts the roman number IV to 4", () => {
  expect(romanNumbersDecoder("IV")).toBe(4);
});

test("Converts the roman number MMVIII to 2008", () => {
  expect(romanNumbersDecoder("MMVIII")).toBe(2008);
});

test("Converts the roman number MDCLXVI to 1666", () => {
  expect(romanNumbersDecoder("MDCLXVI")).toBe(1666);
});
