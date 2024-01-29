// 数组去重，这个文件只考虑数组中的元素为基本类型的情况，不考虑对象类型的情况
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

// 使用 Set
export function unique_1(arr) {
	return [...new Set(arr)];
	// 缺点：Number(1), String('1;), /a/, {} 这样的对象类型没有被去重
}

console.log('1:', unique_1(array));

// 使用filter + indexOf
export function unique_2(arr) {
	return arr.filter((item, index) => arr.indexOf(item) === index);
	// 缺点：同上, 并且俩个 NaN 都消失了
}

console.log('2:', unique_2(array));

// 使用object的键值对不重复
export function unique_3(arr) {
	const obj = {};
	return arr.filter((item) => {
		const key = typeof item + item;
		if (obj.hasOwnProperty(key)) {
			return false;
		} else {
			obj[key] = true;
			return true;
		}
	});
	// 缺点：new Number(1), new String('1') 对应的key都是object1，所以导致后面的被吞了。
}

console.log('3:', unique_3(array));

// 使用map
export function unique_4(arr) {
	const map = new Map();
	return arr.filter((item) => {
		if (map.has(item)) {
			return false;
		} else {
			map.set(item, true);
			return true;
		}
	});
	// 缺点同第一个
}

console.log('4:', unique_4(array));
