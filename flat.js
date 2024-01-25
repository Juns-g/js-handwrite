// 实现ES6中的flat方法
// lodash也有类似的方法，用处一样的
// 默认不传值就是扁平1层，传Infinity就是扁平所有层

export function myFlat(array, depth = 1) {
	if (!Array.isArray(array)) throw new Error(`${array} must be an array`);
	if (depth < 0) throw new Error(`${depth} must be a positive number`);
	if (depth === 0) return array;
	return array.reduce((acc, cur) => {
		if (Array.isArray(cur)) {
			return [...acc, ...myFlat(cur, depth - 1)];
		} else {
			return [...acc, cur];
		}
	}, []);
}
