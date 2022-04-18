import hammingWeight from '../src/array/hammingWeight.js';

test('hammingWeight', () => {
  expect(hammingWeight(0)).toBe(0);
  expect(hammingWeight(4)).toBe(1);
  expect(hammingWeight(101)).toBe(4);
  expect(hammingWeight(1789)).toBe(9);
});
