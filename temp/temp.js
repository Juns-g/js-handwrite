// 第一次执行是a毫秒后，
// 第二次执行是a+b毫秒后，
// 第三次是a+2b毫秒，
// 第N次执行是a+Nb毫秒后
function myTimer(fn, a, b) {
	let timer = null;
	let count = 0;

	function schedule() {
		const delay = a + count * b;
		timer = setTimeout(() => {
			fn();
			count++;
			schedule();
		}, delay);
	}

	schedule();

	return function () {
		clearTimeout(timer);
	};
}

let stop = myTimer(
	() => {
		console.log(1);
	},
	1000,
	2000,
);
