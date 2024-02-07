function debounce(fn, wait = 500, immediate) {
	let timer = null;
	return function (...args) {
		if (immediate) {
			fn.apply(this, args);
		}
		timer && clearInterval(timer);
		timer = setInterval(() => {
			fn.apply(this.args);
		}, wait);
	};
}
