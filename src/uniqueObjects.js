// 对象数组去重, 根据对象中的一个属性去重, 默认为id

// map
export function uniqueObjects_1(arr, key = 'id') {
	const map = new Map();
	return arr.filter((item) => {
		if (map.has(item[key])) {
			return false;
		} else {
			map.set(item[key], true);
			return true;
		}
	});
}

// reduce
export function uniqueObjects_2(arr, key = 'id') {
	return arr.reduce((prev, cur) => {
		const ids = prev.map((item) => item[key]);
		return ids.includes(cur[key]) ? prev : [...prev, cur];
	}, []);
}
