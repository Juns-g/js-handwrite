import { myGet } from './get';
import { test, expect } from 'vitest';

test('myGet ', () => {
	const object = { a: [{ b: { c: 3 } }] };
	const obj2 = {
		data: [
			{
				info: {
					test: [['成功']],
				},
			},
		],
	};

	expect(myGet(object, 'a[0].b.c')).toBe(3);
	expect(myGet(object, 'a.b.c', 'default')).toBe('default');
	expect(myGet(null, 'a.b.c')).toBe(undefined);
	expect(myGet({}, 'a.b.c')).toBe(undefined);
	expect(myGet(undefined, 'a.b.c', '默认值')).toBe('默认值');
	expect(myGet(obj2, 'data[0].info.test[0][0]')).toBe('成功');
});
