// lodash 的 get 是一个简单常用的读取对象的方法，会有一个默认返回值
import { get } from 'lodash-es';
const object = { a: [{ b: { c: 3 } }] };
// console.log(get(object, 'a[0].b.c')); // 3
// console.log(get(object, ['a', '0', 'b', 'c'])); // 3
// console.log(get(object, 'a.b.c', 'default')); // default

// 实现只考虑这俩种：a.b.c, a[0].b.c
/**
 * @param {Object} obj
 * @param {String} path
 * @param {*} defaultVal
 * @return {*}
 */
export function myGet(obj, path, defaultVal = undefined) {
	if (obj === null) return defaultVal;
	// 先用正则替换，然后split成数组
	let arr = [];
	// arr = path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
	// 或者
	arr = path.replace(/\[(\d+)\]/g, '.$1').split('.');
	let result = obj;
	// 遍历数组，如果有值就继续往下找，没有值就返回默认值
	arr.forEach((item) => {
		try {
			result = Object(result)[item] ?? defaultVal;
		} catch (err) {
			console.log('🚀 ~ err:', err);
			console.log('🚀 ~ obj:', obj);
			console.log('🚀 ~ path:', path);
			result = defaultVal;
			return result;
		}
	});
	return result;
}
// console.log(myGet(object, 'a[0].b.c')); // 3
// console.log(myGet(object, 'a.b.c', 'default')); // default
