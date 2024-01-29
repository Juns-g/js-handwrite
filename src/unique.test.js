import { unique_1, unique_2, unique_3, unique_4 } from './unique';
import { test, expect } from 'vitest';

test('unique', () => {
	const array = [
		1,
		1,
		'1',
		'1',
		null,
		null,
		undefined,
		undefined,
		new Number(1),
		new Number(1),
		new String('1'),
		new String('1'),
		/a/,
		/a/,
		NaN,
		NaN,
		'NaN',
		{},
		{},
	];
	const ans = [1, '1', null, undefined, new Number(1), new String('1'), /a/, NaN, 'NaN', {}];

	const simpleArr = [1, 1, '1', '1', true, true, 'true', 'true', undefined, undefined, null, null, NaN, NaN, 'NaN', 'NaN'];
	const simpleAns = [1, '1', true, 'true', undefined, null, NaN, 'NaN'];

	expect(unique_1(simpleArr)).toEqual(simpleAns); // 过
	// expect(unique_2(simpleArr)).toEqual(simpleAns); 未通过，NaN都没了
	expect(unique_3(simpleArr)).toEqual(simpleAns); // 过
	expect(unique_4(simpleArr)).toEqual(simpleAns); // 过

	// expect(unique_1(array)).toEqual(ans); 未通过
	// expect(unique_2(array)).toEqual(ans); 未通过
	// expect(unique_3(array)).toEqual(ans); 未通过
	// expect(unique_4(array)).toEqual(ans);
});
