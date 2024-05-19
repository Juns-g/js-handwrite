import { test, expect } from 'vitest'
import { obj1, obj2, obj3,obj4 } from './isObjectEqual'
import { isEqual } from 'lodash-es'

test('isObjectEqual', () => {
	expect(isEqual(obj1, obj2)).toBe(isEqual(obj1, obj2))
	expect(isEqual(obj1, obj3)).toBe(isEqual(obj1, obj3))
	expect(isEqual(obj1, obj4)).toBe(isEqual(obj1, obj4))
})
