let timeLog = repeat(2, 1000, console.log)
timeLog('hello world')
timeLog('ByteDance')
//'hello world'
//'ByteDance'
//'hello world'
//'ByteDance'

export function repeat(times = 1, wait = 1000, fn) {
	function sleep(wait, fn, args) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					resolve(fn.apply(this, args))
				} catch {
					reject()
				}
			}, wait)
		})
	}
	return async function (...args) {
		const arr = new Array(times).fill(sleep)
		for (let item of arr) {
			await item(wait, fn, args)
		}
	}
}

// 实现一个限定次数的定时执行器的生成器
function repeat_2(times, mills, func) {
	const fn = (args) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(func.apply(this, args))
			}, mills)
		})
	return async (...args) => {
		const arr = new Array(times).fill(fn)
		for (const item of arr) {
			await item(args)
		}
	}
}

// example:
let log3 = repeat_2(3, 1000, console.log)

log3('hello', 'world')

log3('hello', 'world', '2')
