let timeLog = repeat(2, 1000, console.log);
timeLog('hello world');
timeLog('ByteDance');
//'hello world'
//'ByteDance'
//'hello world'
//'ByteDance'

export function repeat(times = 1, wait = 1000, fn) {
	function sleep(wait, fn, args) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					resolve(fn.apply(this, args));
				} catch {
					reject();
				}
			}, wait);
		});
	}
	return async function (...args) {
		const arr = new Array(times).fill(sleep);
		for (let item of arr) {
			await item(wait, fn, args);
		}
	};
}
