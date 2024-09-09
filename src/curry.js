const { log } = console
const add = (a, b, c) => a + b + c

const curryAdd = (a) => {
	return (b) => a + b
}

log(add(1, 2))
log(curryAdd(1)(2))

// curry是一个高阶函数，可以把fn转变成柯里化的函数
const curry = (fn) => {
	// 返回的函数接受的参数是不固定的
	const tempFn = (...rest) => {
		// 当参数数量刚好满足fn就直接调用返回
		if (rest.length >= fn.length) return fn(...rest)
		// 参数数量还不够的时候就继续返回函数
		else return (...newRest) => tempFn(...rest, ...newRest)
	}
	return tempFn
}

const curriedAdd = curry(add)
log(curriedAdd(1)(1)(2))
log(curriedAdd(1, 1)(2))
