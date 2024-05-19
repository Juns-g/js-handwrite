import { isEqual } from 'lodash-es'

export const obj1 = { a: '1', b: 2, c: false }
export const obj2 = { a: '1', b: 2, c: false }
export const obj3 = { a: '1', b: 2, c: 0 }
export const obj4 = { c: false, b: 2, a: '1' }

// console.log(isEqual(obj1, obj2)) // true
// console.log(isEqual(obj1, obj3)) // false
// console.log(isEqual(obj1, obj4)) // true

const sortFn = (a, b) => a[0].localeCompare(b[0])

export const isObjectEqual = (obj, other) => {
	const entries1 = Object.entries(obj).toSorted(sortFn)
	const entries2 = Object.entries(other).toSorted(sortFn)
	if (entries1.length !== entries2.length) return false
	let flag = true
	entries1.forEach(([key, val], i) => {
		let [key2, val2] = entries1[i]
		if (key !== key2) flag = false
		if (val !== val2) flag = false
	})
	return flag
}
// console.log(isObjectEqual(obj1, obj4))
