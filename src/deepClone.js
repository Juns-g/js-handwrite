const obj1 = {
	name: 'obj',
	age: 19,
	info: {
		desc: '我是obj11111',
	},
	arr: [1, 2, 3],
};

// 1.JSON
// 无法拷贝函数和 RegExp 等特殊对象。
// 会忽略 undefined 和 Symbol 属性。
// 如果对象中存在循环引用，该方法会报错。
// 对于 Date 类型的属性，该方法会将其序列化成一个 ISO 格式的字符串，然后再解析出来，而不是直接拷贝 Date 对象。

const obj2 = JSON.parse(JSON.stringify(obj1));
console.log('🚀 ~ obj2:', obj2);

// 递归，不考虑循环引用
function deepCopy(obj) {
	const copyObj = {};
	for (let key in obj) {
		let val = obj[key];
		if (val instanceof Array) {
			copyObj[key] = deepCopy(val);
		} else if (val instanceof Object) {
			copyObj[key] = deepCopy(val);
		} else {
			copyObj[key] = val;
		}
	}
	return copyObj;
}

const obj3 = deepCopy(obj1);
console.log('🚀 ~ obj3:', obj3);

// 考虑循环引用，考虑函数、正则、Date等
function deepCopy_2(target, wm = new WeakMap()) {
	if (typeof target !== 'object') {
		return target;
	}
	if (!target) return target;

	const types = ['Function', 'RegExp', 'Date', 'Symbol', 'Map', 'Set', 'WeakMap', 'WeakSet'];
	const constructor = target.constructor;
	if (types.includes(constructor.name)) {
		return new constructor(target);
	}

	if (wm.has(target)) {
		return wm.get(target);
	}
	wm.set(target, true);

	const res = new constructor();
	for (let key in target) {
		res[key] = deepCopy_2(target[key], wm);
	}
	return res;
}
