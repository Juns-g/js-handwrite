String.prototype.valueOf = function () {
	console.log('valueOf');
	return 2;
};

String.prototype.toString = function () {
	console.log('toString');
};
console.log(2 == new String('3'));
