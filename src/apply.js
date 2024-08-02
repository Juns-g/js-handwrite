Function.prototype.myApply = function (context) {
	if (context === null || context === undefined) {
		context = window
	} else {
		context = Object(context)
	}

	const args = arguments[1]
	const fn = Symbol('fn')
	context[fn] = this
	let res = null
	if (args) {
		if (!Array.isArray(args)) {
			throw new Error('你传入的第二个参数不是数组')
		} else {
			// 如果是类数组就转化成数组
			const arr = Array.from(args)
			res = context[fn](...arr)
		}
	} else {
		res = context[fn]()
	}
	delete context[fn]
	return res
}

Function.prototype.myApply_2 = function (context, params) {
	context = context ? Object(context) : window

	const fn = Symbol('fn')
	context[fn] = this
	let res = null

	if (params) {
		if (!Array.isArray(params)) throw new Error('第二个参数需要是数组')
		res = context[fn](...Array.from(params))
	} else {
		res = context[fn]()
	}

	delete context[fn]
	return res
}
