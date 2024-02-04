import { getUrlParams, getUrlParams_1, getUrlParams_2 } from './getUrlParams';
import { test, expect } from 'vitest';

// 其中的 getUrlParams 就是调用的浏览器api，以他为基准
test('getUrlParams', () => {
	const url1 = 'http://sample.com/?a=1&b=2&c=xx&d=2#hash';
	const url2 = 'http://sample.com';
	const url3 = 'http://sample.com/?a=1&b=2&c=xx&d=';

	const ans1 = getUrlParams(url1);
	// { a: '1', b: '2', c: 'xx', d: '2' };
	const ans2 = getUrlParams(url2);
	// {}
	const ans3 = getUrlParams(url3);
	// { a: '1', b: '2', c: 'xx', d: '' };

	expect(getUrlParams_1(url1)).toEqual(ans1);
	expect(getUrlParams_2(url1)).toEqual(ans1);
	expect(getUrlParams_1(url2)).toEqual(ans2);
	expect(getUrlParams_2(url2)).toEqual(ans2);
	expect(getUrlParams_1(url3)).toEqual(ans3);
	expect(getUrlParams_2(url3)).toEqual(ans3);
});
