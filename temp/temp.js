function debounce(fn, wait = 500, immediate) {
	let timer = null

	return function (...args) {
		const context = this

		if (immediate && !timer) {
			fn.apply(context, args)
		}

		clearTimeout(timer)
		timer = setTimeout(() => {
			if (!immediate) {
				fn.apply(context, args)
			}
			timer = null // 重置 timer
		}, wait)
	}
}

const newFn = debounce(
	() => {
		console.log(111)
	},
	1000,
	true,
)

newFn()
newFn()
newFn()
newFn()
newFn()
