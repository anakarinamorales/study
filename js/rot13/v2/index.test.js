const rot13V2 = require('./index');

test("Transforms the string 'test' into 'grfg'", () => {
  expect(rot13V2('test')).toEqual('grfg');
});

test("Transforms the string 'Test' into 'Grfg'", () => {
  expect(rot13V2('Test')).toEqual('Grfg');
});

test("Transforms the string 'Ruby is cool!' into 'Ehol vf pbby!'", () => {
  expect(rot13V2('Ruby is cool!')).toEqual('Ehol vf pbby!');
});

test("Transforms the string '10+2 is twelve.' into '10+2 vf gjryir.'", () => {
  expect(rot13V2('10+2 is twelve.')).toEqual('10+2 vf gjryir.');
});

test("Transforms the string 'abcdefghijklmnopqrstuvwxyz' into 'nopqrstuvwxyzabcdefghijklm'", () => {
  expect(rot13V2('abcdefghijklmnopqrstuvwxyz')).toEqual(
    'nopqrstuvwxyzabcdefghijklm'
  );
});
