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
