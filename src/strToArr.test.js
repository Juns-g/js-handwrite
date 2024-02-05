import { test, expect } from 'vitest';
import { strToArr, strToArr_2 } from './strToArr';

test('strToArr', () => {
	let str = `
1 2 4342    3 4 5
23 4
    4  5
`;

	let equalStr = '\n1 2 4342    3 4 5\n23 4\n    4  5\n';

	let ans = [
		[1, 2, 4342, 3, 4, 5],
		[23, 4],
		[4, 5],
	];

	expect(strToArr(str)).toEqual(ans);
	expect(strToArr(equalStr)).toEqual(ans);
	expect(strToArr_2(str)).toEqual(ans);
	expect(strToArr_2(equalStr)).toEqual(ans);
});
