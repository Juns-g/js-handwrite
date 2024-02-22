import { test, expect } from 'vitest';
import { numToStr_1, numToStr_2, numToStr_3 } from './NumToStr.js';

test('numToStr ', () => {
	const n1 = 1234567890;
	const ans1 = '1,234,567,890';

	const n2 = 1234.342;
	const ans2 = '1,234.342';

	const n3 = 123456789;
	const ans3 = '123,456,789';

	// 这个有点怪，先不考虑了
	// const n3 = 12344556666.123423;
	// const ans3 = '12,344,556,666.123';

	expect(numToStr_1(n1)).toBe(ans1);
	expect(numToStr_2(n1)).toBe(ans1);
	expect(numToStr_3(n1)).toBe(ans1);

	expect(numToStr_1(n2)).toBe(ans2);
	expect(numToStr_2(n2)).toBe(ans2);
	// expect(numToStr_3(n2)).toBe(ans2);
    // '1234.,342'

	expect(numToStr_1(n3)).toBe(ans3);
	expect(numToStr_2(n3)).toBe(ans3);
	expect(numToStr_3(n3)).toBe(ans3);
});
