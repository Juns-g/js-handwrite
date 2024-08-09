const obj1 = {
	name: 'obj',
	age: 21,
	info: {
		desc: '我是obj11111',
		t: {
			name: 22,
		},
	},
	date: new Date(),
}
console.log('🚀 ~ obj1:', obj1)

const deepClone = (target, wm = new WeakMap()) => {
	if (typeof target !== 'object' || !target) return target
	return new target.constructor(target)
}

console.log('🚀 ~ deepClone:', deepClone(obj1))
