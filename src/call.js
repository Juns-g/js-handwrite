Function.prototype.myCall = function (context, ...args) {
	if (context === null || context === undefined) {
		context = window;
	} else {
		context = Object(context);
	}
	// 使用 Symbol 来避免重复
	const fn = Symbol('fn');
	context[fn] = this;
	const res = context[fn](...args);
	delete context[fn];
	return res;
};
