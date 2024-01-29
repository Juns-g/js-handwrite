import { test, expect } from 'vitest';
import { uniqueObjects_1, uniqueObjects_2 } from './uniqueObjects';

test('uniqueObjects', () => {
	const arr = [
		{ id: 1, name: '111' },
		{ id: 1, name: '111' },
		{ name: '111', id: 1 },
		{ id: 2, name: '222' },
		{ id: 2, name: '222' },
	];

	const ans = [
		{ id: 1, name: '111' },
		{ id: 2, name: '222' },
	];

	const arrByName = [
		{ name: '111', mark: '324234' },
		{ name: '111', mark: '324234' },
		{ name: '222', mark: '33' },
		{ name: '222', mark: '33' },
		{ name: '333', mark: '12' },
	];

	const ansByName = [
		{ name: '111', mark: '324234' },
		{ name: '222', mark: '33' },
		{ name: '333', mark: '12' },
	];

	expect(uniqueObjects_1(arr)).toEqual(ans);
	expect(uniqueObjects_1(arrByName, 'name')).toEqual(ansByName);
	expect(uniqueObjects_2(arr)).toEqual(ans);
	expect(uniqueObjects_2(arrByName, 'name')).toEqual(ansByName);
});
