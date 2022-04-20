import isContinuousSequence from '../src/array/isContinuousSequence.js';

test('isContinuousSequence', () => {
  expect(isContinuousSequence([1, 2, 3, 4])).toBeTruthy();
  expect(isContinuousSequence([-10, -9, -8, -7])).toBeTruthy();
  expect(isContinuousSequence([2, -3, 1])).toBeFalsy();
  expect(isContinuousSequence([1])).toBeFalsy();
});
