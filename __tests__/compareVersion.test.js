import { test, expect } from '@jest/globals';
import compareVersion from '../src/array/compareVersion.js';

test('compareVersion', () => {
  expect(compareVersion('0.3', '1.2')).toBe(-1);
  expect(compareVersion('1.3', '1.2')).toBe(1);
  expect(compareVersion('1.0', '1.0')).toBe(0);
});
