import { myInstanceof } from './instanceof.js';
import { test, expect } from 'vitest';

test('myInstanceof ', () => {
	expect(myInstanceof([], Array)).toBe(true);
	expect(myInstanceof([], Object)).toBe(true);
	expect(myInstanceof({}, Object)).toBe(true);
	expect(myInstanceof([], Function)).toBe(false);
	expect(myInstanceof(function () {}, Function)).toBe(true);

	expect(myInstanceof(123, Number)).toBe(false);
	expect(myInstanceof(new Number(123), Number)).toBe(true);

	expect(myInstanceof('123', String)).toBe(false);
	expect(myInstanceof(new String('123'), String)).toBe(true);

	expect(myInstanceof(null, Object)).toBe(false);
	expect(myInstanceof(undefined, Object)).toBe(false);

	expect(() => myInstanceof([], 1)).toThrow();
	expect(() => myInstanceof([], '')).toThrow();
	expect(() => myInstanceof([], true)).toThrow();
});
