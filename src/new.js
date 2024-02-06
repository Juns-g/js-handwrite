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
