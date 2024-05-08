// sum.test.js
import { sum } from '../code-to-unit-test/sum';

//check if 1+2 = 3
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
//check if sum(1,2) returns 3
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});