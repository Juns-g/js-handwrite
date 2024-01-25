import { myGet } from './get';
import { test, expect } from 'vitest';

test('myGet ', () => {
	const object = { a: [{ b: { c: 3 } }] };
	expect(myGet(object, 'a[0].b.c')).toBe(3);
	expect(myGet(object, 'a.b.c', 'default')).toBe('default');
});
