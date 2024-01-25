// #region
/*
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
console.log([] instanceof Function); // false

console.log(123 instanceof Number); // false
console.log(new Number(123) instanceof Number); // true

console.log('123' instanceof String); // false
console.log(new String('123') instanceof String); // true

console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(function () {} instanceof Function); // true

console.log(null instanceof Object); // false
console.log(undefined instanceof Object); // false
*/
// #endregion

// instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// 基础数据类型、undefined、null没有构造函数，都无法使用这一方法。
// https://juejin.cn/post/7080457287084539940

export function myInstanceof(left, right) {
	// 左侧必须是object
	if (Object(left) !== left) return false;
	// 对于右侧参数可以认为只能为函数, 且不能没有Prototype属性
	if (typeof right !== 'function' || !right.prototype) {
		throw new Error('Right-hand side of "instanceof" is not an object');
	}
	let proto = left.__proto__;
	while (proto !== null) {
		if (proto === right.prototype) return true;
		proto = proto.__proto__;
	}
	return false;
}
