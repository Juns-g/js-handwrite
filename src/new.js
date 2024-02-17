function fPerson(name) {
	this.name = name;
}

fPerson.prototype.sayName = function () {
	console.log(this.name);
};
console.log('🚀 ~ fPerson:', fPerson);

let fff = new fPerson('11111');
console.log(fff.name);
fff.sayName();

function myNew(fn, ...args) {
	const newObj = Object.create(fn.prototype);
	const val = fn.apply(newObj, args);
	return val instanceof Object ? val : newObj;
}

function myNew_2(ctor, ...args) {
	if (typeof ctor !== 'function') {
		throw new Error('构造函数必须是function');
	}
	const obj = {};
	// 原型链链接有很多方案
	obj.__proto__ = ctor.prototype;
	const res = ctor.apply(obj, args);
	// 如果构造函数返回对象，就return出去
	return res instanceof Object ? res : obj;
}
