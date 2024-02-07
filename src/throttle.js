function throttle(timeout = 500, fn) {
	let timer = null;
	let last;

	return function (...args) {
		const now = +new Date();
		if (last && now < last + timeout) {
			clearInterval(timer);
			timer = setTimeout(() => {
				last = now;
				fn.apply(this, args);
			}, timeout);
		} else {
			last = now;
			fn.apply(this, args);
		}
	};
}
