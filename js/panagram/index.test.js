const isPanagram = require('./index');

test("Is 'The quick brown fox jumps over the lazy dog.' a pangram? Yes!", () => {
  expect(isPanagram('The quick brown fox jumps over the lazy dog.')).toBe(true);
});

test("Is 'This isn't a pangram!' a pangram? No!", () => {
  expect(isPanagram("This isn't a pangram!")).toBe(false);
});

test("Is 'abcdefghijklmopqrstuvwxyz ' a pangram? No!", () => {
  expect(isPanagram('abcdefghijklmopqrstuvwxyz ')).toBe(false);
});
test("Is 'aaaaaaaaaaaaaaaaaaaaaaaaaa' a pangram? No!", () => {
  expect(isPanagram('aaaaaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});
test("Is '' a pangram? No!", () => {
  expect(
    isPanagram(
      'A pangram is a sentence that contains every single letter of the alphabet at least once.'
    )
  ).toBe(false);
});

test("Is 'Cwm fjord bank glyphs vext quiz' a pangram? Yes!", () => {
  expect(isPanagram('Cwm fjord bank glyphs vext quiz')).toBe(true);
});

test("Is 'ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ' a pangram? Yes!", () => {
  expect(isPanagram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ')).toBe(true);
});

test("Is 'How quickly daft jumping zebras vex.' a pangram? Yes!", () => {
  expect(isPanagram('How quickly daft jumping zebras vex.')).toBe(true);
});

test("Is 'Pack my box with five dozen liquor jugs.' a pangram? Yes!", () => {
  expect(isPanagram('Pack my box with five dozen liquor jugs.')).toBe(true);
});
