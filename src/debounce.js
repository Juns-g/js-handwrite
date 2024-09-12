function debounce(fn, wait = 500, immediate) {
	let timer = null
	return function (...args) {
		const callNow = immediate && !timer

		clearTimeout(timer)
		timer = setTimeout(() => {
			timer = null
			if (!immediate) fn.apply(this, args)
		}, wait)

		callNow && fn.apply(this, args)
	}
}

const debounce_2 = (cb, wait, immediate) => {
	let timer = null
	return function (...args) {
		if (immediate && !timer) {
			cb.apply(this, args)
			timer = '11'
		} else {
			clearTimeout(timer)
			timer = setTimeout(() => {
				cb.apply(this, args)
				timer = null
			}, wait)
		}
	}
}

// 带取消
const debounce_3 = (cb, wait, immediate) => {
	let timer = null
	function fn(...args) {
		if (immediate && !timer) {
			cb.apply(this, args)
			timer = '11'
		} else {
			clearTimeout(timer)
			timer = setTimeout(() => {
				cb.apply(this, args)
				timer = null
			}, wait)
		}
	}
	fn.cancel = () => {
		clearTimeout(timer)
	}
	return fn
}
