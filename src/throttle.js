function throttle(timeout = 500, fn) {
	let timer = null
	let last

	return function (...args) {
		const now = +new Date()
		if (last && now < last + timeout) {
			clearInterval(timer)
			timer = setTimeout(() => {
				last = now
				fn.apply(this, args)
			}, timeout)
		} else {
			last = now
			fn.apply(this, args)
		}
	}
}
/** 定时器 */
function throttle_2(fn, timeout = 500) {
	let timer = null

	return function (...args) {
		if (timer) return
		timeout = setTimeout(() => {
			fn.apply(this, args)
			timer = null
		}, timeout)
	}
}

/** 时间戳 */
function throttle_3(fn, timeout = 500) {
	let lastTime = 0
	return function (...args) {
		const now = Date.now()
		if (now - lastTime > timeout) {
			lastTime = now
			fn.apply(this, args)
		}
	}
}
