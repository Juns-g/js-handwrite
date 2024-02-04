// 判断是否为数组

// 官方API
export const isArray = Array.isArray;

export function isArray_1(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
}

// 有局限性，原型链
export function isArray_2(obj) {
	return obj instanceof Array;
}

// 有局限性，原型链
export function isArray_3(obj) {
	return obj.constructor === Array;
}

// 有局限性，原型链
export function isArray_4(obj) {
	// 这几种一样的，就不单独写了
	return obj.__proto__ === Array.prototype;
	return Object.getPrototypeOf(obj) === Array.prototype;
	return Array.prototype.isPrototypeOf(obj);
}
