Function.prototype.myCall = function (context, ...args) {
	context = context ? Object(context) : window
	const fn = Symbol('fn')
	context[fn] = this
	const res = context[fn](...args)
	delete context[fn]
	return res
}
