import chunk from '../src/array/chunk.js';

test('chunk', () => {
  expect(chunk([], 3)).toEqual([]);
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
});
