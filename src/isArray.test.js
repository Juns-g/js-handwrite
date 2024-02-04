import { isArray, isArray_1, isArray_2, isArray_3, isArray_4 } from './isArray';
import { test, expect } from 'vitest';

// 以其中的 isArray 为基准
test('isArray', () => {
	const arr = [];
	const obj = {};
	const str = '[]';
	const notArr = { __proto__: Array.prototype };

	expect(isArray_1(arr)).toBe(isArray(arr));
	expect(isArray_1(obj)).toBe(isArray(obj));
	expect(isArray_1(str)).toBe(isArray(str));
	expect(isArray_1(notArr)).toBe(isArray(notArr));

	expect(isArray_2(arr)).toBe(isArray(arr));
	expect(isArray_2(obj)).toBe(isArray(obj));
	expect(isArray_2(str)).toBe(isArray(str));
	expect(isArray_2(notArr)).toBe(true); // 正常

	expect(isArray_3(arr)).toBe(isArray(arr));
	expect(isArray_3(obj)).toBe(isArray(obj));
	expect(isArray_3(str)).toBe(isArray(str));
	expect(isArray_3(notArr)).toBe(true); // 正常

    expect(isArray_4(arr)).toBe(isArray(arr));
	expect(isArray_4(obj)).toBe(isArray(obj));
	expect(isArray_4(str)).toBe(isArray(str));
	expect(isArray_4(notArr)).toBe(true); // 正常

    
});
