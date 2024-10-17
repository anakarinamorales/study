const customIndexOf = require('./index.js');

const names = ['Ana', 'Felix', 'Gilmera', 'Luke'];
const name = 'Fernando';
const values = [0, 1, 5, 22, 66, 22, 5];
const mixed = 'Lindinha586';
const myString = new String('Luana');
const anotherTest = 'arapuarani';

// IndexOf in a string array
test(`Index of the name ${names[3]} in the array ${names} should be 3`, () =>
  expect(customIndexOf(names, 'Luke')).toBe(3));

// IndexOf in a primitive string
test(`Index of letter ${name[6]} in the name ${name} should be 6`, () =>
  expect(customIndexOf(name, 'd')).toBe(6));

// IndexOf in a String object (new String)
test(`Index of string 'ana' on ${myString} should be 2`, () =>
  expect(customIndexOf(myString, 'ana')).toBe(2));

// IndexOf in a string
test(`Index of string 5 on ${mixed} should be 8`, () =>
  expect(customIndexOf(mixed, 5)).toBe(8));

// iIndexOf in array of numbers
test(`Index of 22 on ${values} should be 3`, () =>
  expect(customIndexOf(values, 22)).toBe(3));

// IndexOf in the first subset occourance
test(`Index of 'ara' on ${anotherTest} should be 0`, () =>
  expect(customIndexOf(anotherTest, 'ara')).toBe(0));

test(`Index of 'ran' on ${anotherTest} should be 6`, () =>
  expect(customIndexOf(anotherTest, 'ran')).toBe(6));

test(`Index of 'ron' on ${anotherTest} should be -1`, () =>
  expect(customIndexOf(anotherTest, 'ron')).toBe(-1));
