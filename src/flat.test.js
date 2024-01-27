import { myFlat } from './flat';
import { test, expect } from 'vitest';

test('myFlat ', () => {
	const arr = [23, [23], [23, [32], [12, [12, [13]]]]];

	expect(myFlat(arr)).toStrictEqual(arr.flat());
	expect(myFlat(arr, 2)).toStrictEqual(arr.flat(2));
	expect(myFlat(arr, Infinity)).toStrictEqual(arr.flat(Infinity));

	expect(() => myFlat(arr, -1)).toThrow();
});
