import { test, expect } from '@jest/globals';
import getLastWordLength from '../src/array/getLastWordLength.js';

test('getLastWordLength', () => {
  expect(getLastWordLength('')).toEqual(0);
  expect(getLastWordLength(' Hello my dear    friend   ')).toEqual(6);
});
