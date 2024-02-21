import { test, expect } from 'vitest';
import { slice } from './slice';

test('string slice', () => {
	let str = '123abc';
	expect(slice(str)).toBe(str.slice());
	expect(slice(str, 1)).toBe(str.slice(1));
	expect(slice(str, -1)).toBe(str.slice(-1));
	expect(slice(str, 0, 2)).toBe(str.slice(0, 2));
	expect(slice(str, 0, -2)).toBe(str.slice(0, -2));
});
