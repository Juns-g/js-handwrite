import { test, expect } from 'vitest';
import { isLetter_1, isLetter_2, isLetter_3 } from './isLetter.js';

test('numToStr ', () => {
	let fns = [isLetter_1, isLetter_2, isLetter_3];
	fns.forEach((fn) => {
		expect(fn('a')).toBe(true);
		expect(fn('A')).toBe(true);
		expect(fn('C')).toBe(true);
		expect(fn('Z')).toBe(true);
		expect(fn('z')).toBe(true);

		expect(fn('1')).toBe(false);
		expect(fn('0')).toBe(false);
		expect(fn('9')).toBe(false);
		expect(fn('!')).toBe(false);
		expect(fn('@')).toBe(false);
		expect(fn('#')).toBe(false);
		expect(fn('$')).toBe(false);
		expect(fn('%')).toBe(false);
		expect(fn('')).toBe(false);
		expect(fn(' ')).toBe(false);
	});
});
